interface Props {
  label: string
  title: string
  subtitle: string
}

/** Page heading. The h1 takes keyboard focus on route change (see App). */
export function PageHeader({ label, title, subtitle }: Props) {
  return (
    <>
      <p className="section-label">{label}</p>
      <h1 className="projects__title page-title" tabIndex={-1}>
        {title}
      </h1>
      <p className="projects__subtitle">{subtitle}</p>
    </>
  )
}
