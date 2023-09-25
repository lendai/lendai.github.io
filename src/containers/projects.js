import React from 'react'
import qaTechLogo from '../img/qatech.svg'
import dooerLogo from '../img/dooerlogo.svg'
import agigenLogo from '../img/agigenlogo.png'
import alchemyLogo from '../img/alchemylogo.svg'
import ahlensLogo from '../img/ahlenslogo.svg'
import billoLogo from '../img/billogramlogo.svg'
import googleLogo from '../img/googlelogo.svg'
import uppconLogo from '../img/uppconlogo.svg'
import memmoLogo from '../img/memmologo.svg'
import bidsterLogo from '../img/bidsterlogo.png'
import sjLogo from '../img/sjlogo.svg'

const qaTech = {
  title: 'QA.tech',
  slug: 'qa-dot-tech',
  when: 'June 2023 - now',
  subtitle: 'CEO & Founder',
  logotype: qaTechLogo,
  description: 'Your Autonomous QA Engineer. We enable developers to focus on building products, rather than testing. VC backed.',
}

const memmo = {
  title: 'memmo.me ',
  slug: 'memmo',
  when: 'Nov 2019 - Dec 2022',
  subtitle: 'CTO',
  logotype: memmoLogo,
  involved: '',
  crunchbase: 'https://www.crunchbase.com/organization/memmo/company_financials',
  description:
    'memmo is a platform that sells personalised video greetings from celebrities. Customers browse the site, finds a celebrity they like, makes an order that specifies what the celebrity should say in the video.<br />The celebrity uses our app to record and deliver the video to the customer.<br>Market leader in Europe. 3000+ celebrities, 12 countries, <br>Tech platform: NextJS, Node, Google Cloud, Postgres, React Native<br>I was part of the founding team, built the first version of the platform myself. <br>Scaled the team from 4 to 45 persons in less than 12 months.',
}

const freelance = {
  title: 'Freelance ',
  slug: 'freelance',
  when: 'May 2019 - now',
  subtitle: 'CTO / Strategy consultant',
  logotype: () => (
    <div style={{ fontSize: 50 }}>
      <span role="img" aria-label="Coffee emoji">
        ☕
      </span>
    </div>
  ),
  involved: '',
  description:
    'Helping both startups and established businesses with strategy, hiring, architecture and development.',
}

const alchemy = {
  title: 'Alchemy / NORD DDB',
  slug: 'alchemy',
  when: 'Sept 2018 - May 2019',
  subtitle: 'Head of Technology & Products',
  logotype: alchemyLogo,
  involved: '',
  description:
    'Product & service design studio. I held the Tech Director role in most projects and was in charge of building the tech team. Working with clients such as DHL, Musikhjälpen, Vattenfall, Volkswagen, Klarna.',
}

const dooer = {
  title: 'Dooer',
  slug: 'dooer',
  when: '2016 - Summer 2018',
  subtitle: 'Head of Product & Development',
  logotype: dooerLogo,
  crunchbase: 'https://www.crunchbase.com/organization/dooer',
  involved: '',
  description:
    'Fintech startup that acquired Agigen (see below) in 2016. Managed a team of about 40 developers, designers and team leads accross three locations. The project included microservices, GraphQL and machine learning.',
}

const agigen = {
  title: 'Agigen',
  slug: 'agigen',
  when: '2008-2016',
  subtitle: 'CEO & Founder',
  logotype: agigenLogo,
  involved: '',
  description:
    'My first own company. A digital production agency focused on high profile marketing campaigns and product development. We were fifteen employees when acquired by Dooer in 2016.',
}

const billogram = {
  title: 'Billogram',
  slug: 'billogram',
  when: '2010-2016',
  subtitle: 'CTO',
  logotype: billoLogo,
  involved: '',
  crunchbase: 'https://www.crunchbase.com/organization/billogram',
  description:
    'Billogram is an invoicing service focused on the customer experience. I worked as their CTO for the first four years, and built the first version and techincal architecture. while also providing a team of consultants<br />Exited 2021',
}

const ahlens = {
  title: 'Åhlens',
  slug: 'ahlens',
  when: '2015-2016',
  subtitle: 'Frontend Architect',
  logotype: ahlensLogo,
  involved: '',
  description:
    'Project manager & technical architeture for the frontend for Åhlens.se, Swedens largest retail chain, as they moved into omnichannel commerce.',
}

const build = {
  title: 'Build with Chrome',
  slug: 'build-with-chrome',
  when: '2012-2014',
  subtitle: 'LEGO & Google',
  logotype: googleLogo,
  involved: '',
  description:
    'Marketing campaign showcasing 3D capabilities of Google Chrome by building LEGO in the browser. I lead the Agigen team who built parts of the experience together with North Kingdom.',
}

const sj = {
  title: 'SJ.se',
  slug: 'sj',
  when: '2014-2015',
  subtitle: 'Pilot project for their new site',
  logotype: sjLogo,
  involved: '',
  description:
    'I lead the techincal part together with the agency POND for creating the new version of sj.se, the site for the public train company in Sweden. A successful project that turned into their current solution.',
}

const bidster = {
  title: 'Bidster',
  slug: 'bidster',
  when: '2007-2008',
  subtitle: 'Fullstack Developer',
  logotype: bidsterLogo,
  involved: '',
  description:
    'My first full-time job in tech. Developer for the startup Bidster, a platform for lowest-unique-bid auctions.',
}

const uppcon = {
  title: 'UppCon',
  slug: 'uppcon',
  when: '2001-2012',
  subtitle: 'Founder & Head Organizer',
  logotype: uppconLogo,
  involved: '',
  description:
    'Scandinavias largest event for youths interested in Japanese popular culture. A non-profit I founded which attracted around 5000 visitors during four days at its peak',
}


export default [
  qaTech,
  memmo,
  freelance,
  dooer,
  billogram,
  agigen,
  alchemy,
  ahlens,
  build,
  sj,
  uppcon,
  bidster,
]
