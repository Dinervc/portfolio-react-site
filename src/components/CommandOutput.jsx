export function CommandOutput({ prompt, entry }) {
  if (!entry) {
    return null
  }

  return (
    <section className="command-output" aria-live="polite">
      <p className="command-output__prompt">
        <span>{prompt}:~$</span> <strong>{entry.command}</strong>
      </p>

      <h2>{entry.label}</h2>
      <p className="command-output__description">{entry.description}</p>

      <ul className="command-output__lines">
        {entry.output?.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      <div className="command-output__tags">
        {entry.tags?.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>

      {entry.cta?.label && entry.cta?.href ? (
        <a className="ghost-button" href={entry.cta.href}>
          {entry.cta.label}
        </a>
      ) : null}
    </section>
  )
}
