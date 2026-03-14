export function ProjectsGrid({ description, projects, labels }) {
  const openLabel = labels?.openLabel || ''
  const codeLabel = labels?.codeLabel || ''
  const privateLabel = labels?.privateLabel || ''

  return (
    <section className="projects-panel">
      <p className="projects-panel__description">{description}</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <div
              className={`project-card__media-shell ${project.image ? 'has-image' : 'is-empty'}`}
              style={project.image ? { '--project-image': `url(${project.image})` } : undefined}
              aria-hidden="true"
            >
              <span className="project-card__media-fx" />
            </div>

            <div className="project-card__header">
              <h3>{project.name}</h3>
              {project.year ? <span>{project.year}</span> : null}
            </div>
            <p>{project.description}</p>
            <ul className="stack-list">
              {project.stack?.map((stackItem) => (
                <li key={`${project.name}-${stackItem}`}>{stackItem}</li>
              ))}
            </ul>

            <div className="project-card__actions">
              {!project.links?.open && !project.links?.code ? (
                <span className="project-action project-action--private project-action--full">
                  {privateLabel}
                </span>
              ) : (
                <>
                  {project.links?.open ? (
                    <a
                      className="project-action"
                      href={project.links.open}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {openLabel}
                    </a>
                  ) : (
                    <span className="project-action project-action--empty" aria-hidden="true" />
                  )}

                  {project.links?.code ? (
                    <a
                      className="project-action"
                      href={project.links.code}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {codeLabel}
                    </a>
                  ) : (
                    <span className="project-action project-action--empty" aria-hidden="true" />
                  )}
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
