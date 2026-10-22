export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading…</span>
      <div className="mx-auto mb-8 flex max-w-2xl flex-col items-center gap-4">
        <div className="h-10 w-56 animate-pulse rounded-lg bg-muted" />
        <div className="h-5 w-full animate-pulse rounded bg-muted" />
      </div>
      <div className="h-[42vh] min-h-56 animate-pulse rounded-2xl border bg-muted/60" />
    </div>
  )
}
