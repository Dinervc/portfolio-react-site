import rawContent from '../content/portfolio.json'

const emptySection = {
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

function sortProjects(projects) {
  return [...projects].sort((a, b) => {
    const scoreA = normalizeProudnessScore(a?.proudnessScore)
    const scoreB = normalizeProudnessScore(b?.proudnessScore)

    if (scoreA !== scoreB) {
      return scoreA - scoreB
    }

    const nameA = typeof a?.name === 'string' ? a.name : ''
    const nameB = typeof b?.name === 'string' ? b.name : ''

    return nameA.localeCompare(nameB, undefined, {
      sensitivity: 'base',
      numeric: true,
    })
  })
}

export function getPortfolioContent() {
  const projects = Array.isArray(rawContent.projects) ? rawContent.projects : []

  return {
    ...emptySection,
    ...rawContent,
    commands: Array.isArray(rawContent.commands) ? rawContent.commands : [],
    projects: sortProjects(projects),
    contact: Array.isArray(rawContent.contact) ? rawContent.contact : [],
  }
}
