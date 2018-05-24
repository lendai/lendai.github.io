import React from 'react'
import { withSiteData } from 'react-static'
// import glamorous from 'glamorous'
//
// import logoImg from '../logo.png'

// const LogoImage = glamorous.img({
//   maxWidth: '100%',
// })


import StartSection from '../sections/header'
import IngressSection from '../sections/ingress'
import ProjectsSection from '../sections/projects'
import ContactSection from '../sections/contact'

export default withSiteData(() => (
  <div>
    <StartSection />
    <IngressSection />
    <ProjectsSection />
    <ContactSection />
  </div>
))
