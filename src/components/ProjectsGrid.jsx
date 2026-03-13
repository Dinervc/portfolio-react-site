export function ProjectsGrid({ description, projects }) {
  return (
    <section className="projects-panel">
      <p className="projects-panel__description">{description}</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <div className="project-card__header">
              <h3>{project.name}</h3>
              <span>{project.year}</span>
            </div>
            <p>{project.description}</p>
            <ul className="stack-list">
              {project.stack?.map((stackItem) => (
                <li key={`${project.name}-${stackItem}`}>{stackItem}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noreferrer">
              Open project
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
