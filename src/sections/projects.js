import React from 'react'
import Section from '../components/section'
import projects from '../containers/projects'

const extraBrands = [
  'Carlsberg',
  'DDB',
  'North Kingdom',
  'Samsung',
  'Volvo',
  'Adidas',
  'Svenska Spel',
  'Mini Cooper',
  'Vodafone',
  'Sony',
  'Nordea',
  'McDonalds',
].sort()

const Projects = () => (
  <Section className="projects-section">

    <div className="tighter-container">
      <h2 className="space-above-section projects-section-title">{'What I\'ve done so far'}</h2>
      {projects.map(project => (
        <article key={project.title} className={`project--${project.slug}`}>
          <figure className="project">
            <div className="project-icon">
              <img src={project.logotype} alt="Dooer Logo" />
            </div>
            <figcaption>
              <h2>{project.title}</h2>
              <p className="project__subtitle">
                {project.when && <span>{project.when}</span>}
                {(project.when && project.subtitle) ? <span>{', '}</span> : null}
                {project.subtitle && <span>{project.subtitle}</span>}
              </p>
              <p className="project__description">
                {project.description}
              </p>
            </figcaption>
          </figure>

        </article>
      ))}

      <div style={{ width: '70%', margin: '60px auto', color: '#232323', fontSize: '15px', lineHeight: '1.6', textAlign: 'center' }}>
        <p>
          {'During my time at Agigen I\'ve worked with a wide variety of high profile brands and agencys.'}<br />
          {`A few of them are; ${extraBrands.join(', ')}`}
        </p>
        <p>
          <a href="#contact">{'Get in touch'}</a>{' to learn more'}
        </p>
      </div>
    </div>
  </Section>
)

export default Projects
