const API_KEY = process.env.MAILCHIMP_API_KEY;
const SERVER = process.env.MAILCHIMP_SERVER_PREFIX;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

console.log('Testing Mailchimp connectivity...');
console.log('API_KEY exists?', !!API_KEY);
console.log('SERVER:', SERVER);
console.log('AUDIENCE_ID:', AUDIENCE_ID);

if (!API_KEY || !SERVER || !AUDIENCE_ID) {
  console.error('Missing environment variables');
  process.exit(1);
}

// Simple test: ping Mailchimp API root
const auth = Buffer.from(`anystring:${API_KEY}`).toString('base64');
const url = `https://${SERVER}.api.mailchimp.com/3.0/`;

fetch(url, {
  headers: {
    Authorization: `Basic ${auth}`,
  },
})
  .then(res => {
    console.log('Response status:', res.status);
    if (res.ok) {
      return res.json();
    } else {
      return res.text().then(text => {
        throw new Error(`HTTP ${res.status}: ${text}`);
      });
    }
  })
  .then(data => {
    console.log('Mailchimp API response:', JSON.stringify(data, null, 2));
    console.log('✅ Mailchimp API connectivity successful');
  })
  .catch(err => {
    console.error('❌ Mailchimp API connectivity failed:', err.message);
  });