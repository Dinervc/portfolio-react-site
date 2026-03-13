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

export function getPortfolioContent() {
  return {
    ...emptySection,
    ...rawContent,
    commands: Array.isArray(rawContent.commands) ? rawContent.commands : [],
    projects: Array.isArray(rawContent.projects) ? rawContent.projects : [],
    contact: Array.isArray(rawContent.contact) ? rawContent.contact : [],
  }
}
