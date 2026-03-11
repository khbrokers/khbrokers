export default function SellersLoading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f0fdf4]">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-8 w-8 animate-spin rounded-full border-2 border-[#00965F] border-t-transparent"
          aria-hidden
        />
        <p className="text-sm font-medium text-zinc-600">Loading...</p>
      </div>
    </main>
  );
}
