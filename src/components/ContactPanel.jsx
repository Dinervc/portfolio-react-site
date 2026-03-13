export function ContactPanel({ note, contacts }) {
  return (
    <section className="contact-panel">
      <p className="contact-panel__note">{note}</p>
      <ul className="contact-list">
        {contacts.map((item) => (
          <li key={item.label}>
            <span className="contact-list__key">"{item.label}"</span>
            <span className="contact-list__sep">:</span>
            <a href={item.href} target="_blank" rel="noreferrer">
              "{item.value}"
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
