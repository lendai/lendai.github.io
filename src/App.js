import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

import './app.css'

const App = () => (
  <Router>
    <main className="content">
      <Routes />
    </main>
  </Router>
)

export default hot(module)(App)
