import React from 'react'
import dooerLogo from '../img/dooerlogo.svg'
import agigenLogo from '../img/agigenlogo.png'
import alchemyLogo from '../img/alchemylogo.svg'
import ahlensLogo from '../img/ahlenslogo.svg'
import billoLogo from '../img/billogramlogo.svg'
import googleLogo from '../img/googlelogo.svg'
import uppconLogo from '../img/uppconlogo.svg'
import bidsterLogo from '../img/bidsterlogo.png'
import sjLogo from '../img/sjlogo.svg'

const freelance = {
  title: 'Freelance ',
  slug: 'freelance',
  when: 'May 2019 - now',
  subtitle: 'CTO / Fullstack developer',
  logotype: () => (
    <div style={{ fontSize: 50 }}><span role="img" aria-label="Coffee emoji">☕</span></div>
  ),
  involved: '',
  description: 'Helping both startups and established businesses with strategy, hiring, architecture and development. Feel free to hire me :)',
}

const alchemy = {
  title: 'Alchemy / NORD DDB',
  slug: 'alchemy',
  when: 'Sept 2018 - May 2019',
  subtitle: 'Head of Technology & Products',
  logotype: alchemyLogo,
  involved: '',
  description: 'Product & service design studio. I hold Tech Director role in most projects and are in charge of building the tech team. Working with clients such as DHL, Musikhjälpen, Vattenfall, Volkswagen, Klarna.',
}

const dooer = {
  title: 'Dooer',
  slug: 'dooer',
  when: '2016 - Summer 2018',
  subtitle: 'Head of Product & Development',
  logotype: dooerLogo,
  involved: '',
  description: 'Fintech startup that acquired Agigen in 2016. Managed a team of about 30 developers, designers and team leads accross three locations. The project included microservices, GraphQL and machine learning.',
}

const agigen = {
  title: 'Agigen',
  slug: 'agigen',
  when: '2008-2016',
  subtitle: 'CEO & Founder',
  logotype: agigenLogo,
  involved: '',
  description: 'Before joining Dooer I ran a digital production agency focused on high profile marketing campaigns and product development. We were fifteen employees when acquired by Dooer.',
}

const billogram = {
  title: 'Billogram',
  slug: 'billogram',
  when: '2010-2016',
  subtitle: 'CTO',
  logotype: billoLogo,
  involved: '',
  description: 'The most successful product development project we ran at Agigen was Billogram. Billogram is an invoicing service focused on the customer experience. I worked as their CTO for the first four years, while also providing a team of consultants',
}

const ahlens = {
  title: 'Åhlens',
  slug: 'ahlens',
  when: '2015-2016',
  subtitle: 'Frontend Architect',
  logotype: ahlensLogo,
  involved: '',
  description: 'Project manager & technical architeture for the frontend for Åhlens.se, Swedens largest retail chain, as they moved into omnichannel commerce.',
}

const build = {
  title: 'Build with Chrome',
  slug: 'build-with-chrome',
  when: '2012-2014',
  subtitle: 'LEGO & Google',
  logotype: googleLogo,
  involved: '',
  description: 'Marketing campaign showcasing 3D capabilities of Google Chrome by building LEGO in the browser. I lead the Agigen team who built parts of the experience together with North Kingdom.',
}

const sj = {
  title: 'SJ.se',
  slug: 'sj',
  when: '2014-2015',
  subtitle: 'Pilot project for their new site',
  logotype: sjLogo,
  involved: '',
  description: 'I lead the techincal part together with the agency POND for creating the new version of sj.se, the site for the public train company in Sweden. A successful project that turned into their current solution.',
}

const bidster = {
  title: 'Bidster',
  slug: 'bidster',
  when: '2007-2008',
  subtitle: 'Fullstack Developer',
  logotype: bidsterLogo,
  involved: '',
  description: 'My first full-time job in tech. Developer for the startup Bidster, that did lowest-unique-bid auctions.',
}

const uppcon = {
  title: 'UppCon',
  slug: 'uppcon',
  when: '2001-2012',
  subtitle: 'Founder & Head Organizer',
  logotype: uppconLogo,
  involved: '',
  description: 'Scandinavias largest event for youths interested in Japanese popular culture. A non-profit I founded which attracted around 5000 visitors during four days at it\'s peak',
}

export default [
  freelance,
  alchemy,
  dooer,
  agigen,
  billogram,
  ahlens,
  build,
  sj,
  uppcon,
  bidster,
]
