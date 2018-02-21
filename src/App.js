import React from 'react'
import { Router } from 'react-static'
// import { Router, Link } from 'react-static'
import glamorous from 'glamorous'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import './app.css'

const AppStyles = glamorous.div({
  '& a': {
    textDecoration: 'none',
    color: '#108db8',
    fontWeight: 'bold',
  },
})

const App = () => (
  <Router>
    <AppStyles>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav> */}
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
)

export default hot(module)(App)
