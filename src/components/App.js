import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './Layout'
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer'
import BadgeEdit from '../pages/BadgeEdit'
import NotFound from '../pages/NotFound'

function App () {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/badges' component={Badges} />
          <Route exact path='/badges/new' component={BadgeNew} />
          <Route exact path='/badges/:badgeId' component={BadgeDetailsContainer} />
          <Route exact path='/badges/:badgeId/edit' component={BadgeEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
