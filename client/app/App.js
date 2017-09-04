import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Example from './Example/Example'
import NotFound from './404/404'

const App = props => {
  return (
    <div className="app-wrapper">
      {/*<Navbar/>*/}
      <div className="main-app-container">
        <Switch>
          <Route exact path="/" component={Example}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </div>
  )
}

export default App
