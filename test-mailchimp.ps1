$envFile = ".env.local"
if (-not (Test-Path $envFile)) {
    Write-Host "File $envFile not found"
    exit 1
}

$lines = Get-Content $envFile
foreach ($line in $lines) {
    if ($line -match '^\s*([^#][^=]+)=(.*)$') {
        $key = $matches[1].Trim()
        $value = $matches[2].Trim()
        [Environment]::SetEnvironmentVariable($key, $value)
    }
}

$apiKey = [Environment]::GetEnvironmentVariable("MAILCHIMP_API_KEY")
$server = [Environment]::GetEnvironmentVariable("MAILCHIMP_SERVER_PREFIX")
$audienceId = [Environment]::GetEnvironmentVariable("MAILCHIMP_AUDIENCE_ID")

Write-Host "API Key: $apiKey"
Write-Host "Server: $server"
Write-Host "Audience ID: $audienceId"

if (-not $apiKey -or -not $server -or -not $audienceId) {
    Write-Host "Missing environment variables"
    exit 1
}

$auth = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("anystring:$apiKey"))
$url = "https://$server.api.mailchimp.com/3.0/"

try {
    $response = Invoke-RestMethod -Uri $url -Headers @{
        Authorization = "Basic $auth"
    } -Method Get
    Write-Host "Success: $($response | ConvertTo-Json -Depth 10)"
} catch {
    Write-Host "Error: $($_.Exception.Message)"
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $reader.BaseStream.Position = 0
        $reader.DiscardBufferedData()
        $responseBody = $reader.ReadToEnd()
        Write-Host "Response: $responseBody"
    }
}