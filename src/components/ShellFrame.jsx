export function ShellFrame({ title, children }) {
  return (
    <section className="shell-frame">
      <header className="shell-frame__header">
        <div className="shell-frame__lights" aria-hidden="true">
          <span className="shell-light shell-light--red" />
          <span className="shell-light shell-light--amber" />
          <span className="shell-light shell-light--green" />
        </div>
        <p className="shell-frame__title">{title}</p>
        <span className="shell-frame__status">LIVE</span>
      </header>
      <div className="shell-frame__body">{children}</div>
    </section>
  )
}
