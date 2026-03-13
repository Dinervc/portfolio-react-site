import { useMemo, useState } from 'react'
import './App.css'
import { CommandNavigator } from './components/CommandNavigator'
import { CommandOutput } from './components/CommandOutput'
import { ContactPanel } from './components/ContactPanel'
import { ProjectsGrid } from './components/ProjectsGrid'
import { ShellFrame } from './components/ShellFrame'
import { getPortfolioContent } from './lib/getPortfolioContent'

function App() {
  const content = useMemo(() => getPortfolioContent(), [])
  const initialCommand = content.commands[0]?.command ?? ''
  const [activeCommand, setActiveCommand] = useState(initialCommand)

  const activeEntry =
    content.commands.find((item) => item.command === activeCommand) ??
    content.commands[0]

  const prompt = `${content.profile.handle || 'user'}@portfolio`

  return (
    <div className="terminal-page">
      <main className="terminal-layout">
        <header className="hero-panel">
          <p className="hero-panel__role">{content.profile.role}</p>
          <h1>{content.profile.name}</h1>
          <p className="hero-panel__tagline">{content.profile.tagline}</p>
          <ul className="hero-panel__meta">
            <li>{content.profile.location}</li>
            <li>{content.profile.availability}</li>
          </ul>
        </header>

        <ShellFrame title={content.shell.title}>
          <div className="boot-sequence">
            {content.shell.welcome?.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="shell-grid">
            <CommandNavigator
              prompt={prompt}
              commands={content.commands}
              activeCommand={activeCommand}
              onSelect={setActiveCommand}
            />
            <CommandOutput prompt={prompt} entry={activeEntry} />
          </div>
        </ShellFrame>

        <ShellFrame title={content.projectsSection.titleCommand}>
          <ProjectsGrid
            description={content.projectsSection.description}
            projects={content.projects}
          />
        </ShellFrame>

        <ShellFrame title={content.contactSection.titleCommand}>
          <ContactPanel note={content.contactSection.note} contacts={content.contact} />
        </ShellFrame>

        <footer className="footer-note">{content.footer}</footer>
      </main>
    </div>
  )
}

export default App
