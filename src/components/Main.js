import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavigationBar from './NavigationBar'
import Page from './Page'
import Blog from './Blog'

/* Example Page for extra content */
const AboutMe = () => (
  <Page title="About Me">
    <p>This is a page all about me</p>
  </Page>
)

const Main = () => (
  <Router>
    <div className="row">
      <div className="col-md-2 col-xs-12">
        <NavigationBar />
      </div>
      <div className="col-md-8 col-xs-12 main-content">
        <Route exact path="/" component={Blog} />
        <Route path="/about" component={AboutMe} />
      </div>
    </div>
  </Router>
)

export default Main
