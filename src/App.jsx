import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { CommandNavigator } from './components/CommandNavigator'
import { CommandOutput } from './components/CommandOutput'
import { ContactPanel } from './components/ContactPanel'
import { ProjectsGrid } from './components/ProjectsGrid'
import { ShellFrame } from './components/ShellFrame'
import { TerminalLogo } from './components/TerminalLogo'
import { DEFAULT_LOCALE, getPortfolioContent, resolveLocale } from './lib/getPortfolioContent'

const SECRET_LOGO_TAPS = 5
const LANGUAGE_STORAGE_KEY = 'portfolio-language'
const LANGUAGE_CODES = ['en', 'de']

function getInitialLocale() {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE
  }

  try {
    const storedLocale = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (storedLocale) {
      return resolveLocale(storedLocale)
    }
  } catch {
    // Ignore localStorage access issues.
  }

  const browserLocale = window.navigator.language || window.navigator.languages?.[0] || ''
  return resolveLocale(browserLocale)
}

function App() {
  const [locale, setLocale] = useState(getInitialLocale)
  const content = useMemo(() => getPortfolioContent(locale), [locale])
  const initialCommandId = content.commands[0]?.id || content.commands[0]?.command || ''
  const [activeCommandId, setActiveCommandId] = useState(initialCommandId)
  const [isHeroDocked, setIsHeroDocked] = useState(false)
  const [logoTapCount, setLogoTapCount] = useState(0)

  const resolvedActiveCommandId = content.commands.some(
    (item) => (item.id || item.command) === activeCommandId,
  )
    ? activeCommandId
    : content.commands[0]?.id || content.commands[0]?.command || ''

  const activeEntry =
    content.commands.find((item) => (item.id || item.command) === resolvedActiveCommandId) ??
    content.commands[0]

  const fallbackHandle = content.ui?.prompt?.fallbackHandle || ''
  const promptHost = content.ui?.prompt?.host || ''
  const promptHandle = content.profile.handle || fallbackHandle
  const prompt = promptHost ? `${promptHandle}@${promptHost}` : promptHandle
  const isLogoStoryOpen = logoTapCount >= SECRET_LOGO_TAPS
  const isLogoStoryRevealed = isLogoStoryOpen && !isHeroDocked

  useEffect(() => {
    document.documentElement.lang = content.locale || locale

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, content.locale || locale)
    } catch {
      // Ignore localStorage access issues.
    }
  }, [content.locale, locale])

  const onLogoSecretClick = () => {
    if (isLogoStoryOpen) {
      setLogoTapCount(0)
      return
    }

    setLogoTapCount((value) => Math.min(value + 1, SECRET_LOGO_TAPS))
  }

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

  const languageSwitcher = content.ui?.languageSwitcher || {}
  const commandNavigatorUi = content.ui?.commandNavigator || {}
  const logoUi = content.ui?.logo || {}
  const logoStory = content.ui?.logoStory || {}
  const shellFrameUi = content.ui?.shellFrame || {}
  const projectLabels = content.ui?.projects || {}

  return (
    <div className="terminal-page">
      <div className="language-switcher" role="group" aria-label={languageSwitcher.ariaLabel}>
        {LANGUAGE_CODES.map((code) => {
          const label = code === 'en' ? languageSwitcher.enLabel : languageSwitcher.deLabel
          const isActive = content.locale === code

          return (
            <button
              key={code}
              type="button"
              className={`language-switcher__button ${isActive ? 'is-active' : ''}`}
              aria-pressed={isActive}
              onClick={() => setLocale(code)}
            >
              {label || code.toUpperCase()}
            </button>
          )
        })}
      </div>

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

            <div className={`hero-panel__logo ${isLogoStoryRevealed ? 'is-story-open' : ''}`}>
              <button
                type="button"
                className={`hero-logo-secret ${isLogoStoryRevealed ? 'is-revealed' : ''}`}
                aria-label={isLogoStoryOpen ? logoStory.hideAriaLabel : logoStory.openAriaLabel}
                onClick={onLogoSecretClick}
              >
                <div className="hero-logo-secret__inner">
                  <div className="hero-logo-secret__face hero-logo-secret__face--front">
                    <TerminalLogo ariaLabel={logoUi.ariaLabel} />
                  </div>
                  <div className="hero-logo-secret__face hero-logo-secret__face--back">
                    <span className="hero-logo-secret__title">{logoStory.title}</span>
                    <span className="hero-logo-secret__body">{logoStory.body}</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </header>

        <ShellFrame title={content.shell.title} ui={shellFrameUi}>
          <div className="boot-sequence">
            {content.shell.welcome?.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="shell-grid">
            <CommandNavigator
              prompt={prompt}
              commands={content.commands}
              activeCommandId={resolvedActiveCommandId}
              onSelect={setActiveCommandId}
              ariaLabel={commandNavigatorUi.ariaLabel}
              helpCommand={commandNavigatorUi.helpCommand}
            />
            <CommandOutput prompt={prompt} entry={activeEntry} />
          </div>
        </ShellFrame>

        <ShellFrame title={content.projectsSection.titleCommand} ui={shellFrameUi}>
          <ProjectsGrid
            description={content.projectsSection.description}
            projects={content.projects}
            labels={projectLabels}
          />
        </ShellFrame>

        <ShellFrame title={content.contactSection.titleCommand} ui={shellFrameUi}>
          <ContactPanel note={content.contactSection.note} contacts={content.contact} />
        </ShellFrame>

        <footer className="footer-note">{content.footer}</footer>
      </main>
    </div>
  )
}

export default App
