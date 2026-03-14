import dePortfolioContent from '../content/de.portfolio.json'
import enPortfolioContent from '../content/en.portfolio.json'

export const DEFAULT_LOCALE = 'en'

const CONTENT_BY_LOCALE = {
  en: enPortfolioContent,
  de: dePortfolioContent,
}

export function resolveLocale(locale) {
  const normalizedLocale = typeof locale === 'string' ? locale.toLowerCase().trim() : ''

  if (normalizedLocale in CONTENT_BY_LOCALE) {
    return normalizedLocale
  }

  if (normalizedLocale.startsWith('de')) {
    return 'de'
  }

  return DEFAULT_LOCALE
}

const emptySection = {
  locale: DEFAULT_LOCALE,
  ui: {
    prompt: {},
    languageSwitcher: {},
    commandNavigator: {},
    logo: {},
    logoStory: {},
    shellFrame: {},
    projects: {},
  },
  profile: {},
  shell: {},
  commands: [],
  projectsSection: {},
  projects: [],
  contactSection: {},
  contact: [],
  footer: '',
}

function normalizeProudnessScore(score) {
  const numeric = Number(score)

  if (!Number.isFinite(numeric)) {
    return 1
  }

  return numeric < 1 ? 0 : numeric
}

function sortProjects(projects, locale) {
  return [...projects].sort((a, b) => {
    const scoreA = normalizeProudnessScore(a?.proudnessScore)
    const scoreB = normalizeProudnessScore(b?.proudnessScore)

    if (scoreA !== scoreB) {
      return scoreA - scoreB
    }

    const nameA = typeof a?.name === 'string' ? a.name : ''
    const nameB = typeof b?.name === 'string' ? b.name : ''

    return nameA.localeCompare(nameB, locale, {
      sensitivity: 'base',
      numeric: true,
    })
  })
}

export function getPortfolioContent(locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale)
  const rawContent = CONTENT_BY_LOCALE[resolvedLocale] ?? enPortfolioContent
  const projects = Array.isArray(rawContent.projects) ? rawContent.projects : []

  return {
    ...emptySection,
    ...rawContent,
    locale: resolvedLocale,
    commands: Array.isArray(rawContent.commands) ? rawContent.commands : [],
    projects: sortProjects(projects, resolvedLocale),
    contact: Array.isArray(rawContent.contact) ? rawContent.contact : [],
  }
}
