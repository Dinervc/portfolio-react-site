import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { CommandNavigator } from './components/CommandNavigator'
import { CommandOutput } from './components/CommandOutput'
import { ContactPanel } from './components/ContactPanel'
import { ProjectsGrid } from './components/ProjectsGrid'
import { ShellFrame } from './components/ShellFrame'
import { TerminalLogo } from './components/TerminalLogo'
import { getPortfolioContent } from './lib/getPortfolioContent'

function App() {
  const content = useMemo(() => getPortfolioContent(), [])
  const initialCommand = content.commands[0]?.command ?? ''
  const [activeCommand, setActiveCommand] = useState(initialCommand)
  const [isHeroDocked, setIsHeroDocked] = useState(false)

  const activeEntry =
    content.commands.find((item) => item.command === activeCommand) ??
    content.commands[0]

  const prompt = `${content.profile.handle || 'user'}@portfolio`

  useEffect(() => {
    const dockInTrigger = 92
    const dockOutTrigger = 58
    let rafId = 0

    const updateDockState = () => {
      const currentScrollY = window.scrollY
      setIsHeroDocked((previousValue) => {
        if (currentScrollY >= dockInTrigger) {
          return true
        }
        if (currentScrollY <= dockOutTrigger) {
          return false
        }
        return previousValue
      })
      rafId = 0
    }

    const onScroll = () => {
      if (rafId !== 0) {
        return
      }

      rafId = window.requestAnimationFrame(updateDockState)
    }

    updateDockState()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [])

  return (
    <div className="terminal-page">
      <main className="terminal-layout">
        <header className={`hero-shell ${isHeroDocked ? 'hero-shell--docked' : ''}`}>
          <div className="hero-panel">
            <div className="hero-panel__content">
              <p className="hero-panel__role">{content.profile.role}</p>
              <h1>{content.profile.name}</h1>
              <p className="hero-panel__tagline">{content.profile.tagline}</p>
              <ul className="hero-panel__meta">
                <li>{content.profile.location}</li>
                <li>{content.profile.availability}</li>
              </ul>
            </div>

            <div className="hero-panel__logo">
              <TerminalLogo />
            </div>
          </div>
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
