import React from 'react'
import { withSiteData } from 'react-static'
// import glamorous from 'glamorous'
//
// import logoImg from '../logo.png'

// const LogoImage = glamorous.img({
//   maxWidth: '100%',
// })
import projects from './projects'

const StartSection = () => (
  <section className="landing-page">
    <main className="landing-page__main-section">
      <p>All about the</p>
      <h1 style={{ margin: 0, fontFamily: 'Libre Baskerville', fontSize: '4.4rem', lineHeight: '1.35', fontWeight: 'bold' }}>
          Mauno Pettersson<br />
          Daniel
      </h1>
    </main>
  </section>
)

const Section = props => {
  const { children } = props
  return (
    <section style={{ minHeight: '100vh', background: 'white', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', width: '90%', margin: '0 auto' }}>
        {children}
      </div>
    </section>
  )
}

export default withSiteData(() => (
  <div>
    <StartSection />

    <Section>
      <h2 className="space-above-section">Profile</h2>
      <p>I am a person that makes things happen. I manage people and projects, write code and explore ideas.</p>
      <h2 className="space-above-section">Projects</h2>
      {projects.map(project => (
        <article key={project.title}>
          <h2>{project.title}</h2>
          {project.subtitle && <p className="project__subtitle">{project.subtitle}</p>}
          <p>
            {project.description}
          </p>
        </article>
      ))}
    </Section>
    <Section>
      <h2 className="space-above-section">Get in touch</h2>
      <p>
        The easiest way is to send an email to <a href="mailto:daniel@mauno.io">daniel@mauno.io</a>, a textmessage to <a href="tel:46733445315">0733445315</a>, or hit me up on <a href="" target="_blank">LinkedIn</a>
      </p>
    </Section>
  </div>
))
