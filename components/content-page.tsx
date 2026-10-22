type ContentPageProps = {
  title: string
  description: string
  updated?: string
  children: React.ReactNode
}

export function ContentPage({ title, description, updated, children }: ContentPageProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="mb-10 border-b pb-8">
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{description}</p>
        {updated && <p className="mt-4 text-sm text-muted-foreground">Last updated: {updated}</p>}
      </header>
      <div className="flex flex-col gap-4 leading-relaxed text-foreground/85 [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>
    </article>
  )
}
