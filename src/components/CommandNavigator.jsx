export function CommandNavigator({
  prompt,
  commands,
  activeCommandId,
  onSelect,
  ariaLabel,
  helpCommand,
}) {
  const safeHelpCommand = helpCommand || ''

  return (
    <aside className="command-nav" aria-label={ariaLabel}>
      <p className="command-nav__hint">{prompt}:~$ {safeHelpCommand}</p>
      <ul className="command-nav__list">
        {commands.map((item) => {
          const commandId = item.id || item.command
          const isActive = commandId === activeCommandId

          return (
            <li key={commandId}>
              <button
                type="button"
                className={`command-nav__button ${isActive ? 'is-active' : ''}`}
                onClick={() => onSelect(commandId)}
              >
                <span className="command-nav__command">$ {item.command}</span>
                <span className="command-nav__label">{item.label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
