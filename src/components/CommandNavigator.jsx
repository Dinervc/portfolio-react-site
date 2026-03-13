export function CommandNavigator({ prompt, commands, activeCommand, onSelect }) {
  return (
    <aside className="command-nav" aria-label="Shell commands">
      <p className="command-nav__hint">{prompt}:~$ help</p>
      <ul className="command-nav__list">
        {commands.map((item) => {
          const isActive = item.command === activeCommand

          return (
            <li key={item.command}>
              <button
                type="button"
                className={`command-nav__button ${isActive ? 'is-active' : ''}`}
                onClick={() => onSelect(item.command)}
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
