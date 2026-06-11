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
        <header className="hero">
          <div className="hero__content">
            <p className="hero__role">{content.profile.role}</p>
            <h1>{content.profile.name}</h1>
            <p className="hero__tagline">{content.profile.tagline}</p>
            <p className="hero__meta">
              <span>{content.profile.location}</span>
              <span className="hero__meta-sep" aria-hidden="true">
                ·
              </span>
              <span className="hero__availability">{content.profile.availability}</span>
            </p>
          </div>

          <div className={`hero__logo ${isLogoStoryOpen ? 'is-story-open' : ''}`}>
            <button
              type="button"
              className={`hero-logo-secret ${isLogoStoryOpen ? 'is-revealed' : ''}`}
              aria-label={isLogoStoryOpen ? logoStory.hideAriaLabel : logoStory.openAriaLabel}
              onClick={onLogoSecretClick}
            >
              <div className="hero-logo-secret__inner">
                <div className="hero-logo-secret__face hero-logo-secret__face--front">
                  <TerminalLogo ariaLabel={logoUi.ariaLabel} params={logoUi.params} />
                </div>
                <div className="hero-logo-secret__face hero-logo-secret__face--back">
                  <span className="hero-logo-secret__title">{logoStory.title}</span>
                  <span className="hero-logo-secret__body">{logoStory.body}</span>
                </div>
              </div>
            </button>
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

        <div className="page-section">
          <ShellFrame title={content.projectsSection.titleCommand} ui={shellFrameUi}>
            <ProjectsGrid
              description={content.projectsSection.description}
              projects={content.projects}
              labels={projectLabels}
            />
          </ShellFrame>
        </div>

        <div className="page-section">
          <ShellFrame title={content.contactSection.titleCommand} ui={shellFrameUi}>
            <ContactPanel note={content.contactSection.note} contacts={content.contact} />
          </ShellFrame>
        </div>

        <footer className="footer-note">{content.footer}</footer>
      </main>
    </div>
  )
}

export default App
