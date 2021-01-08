/** package imports */
import React from "react"
import { Switch, Route } from "react-router-dom"

import { HomePage, DetailView } from "./views"

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route
        path="/:id"
        render={(routeProps) => {
          return <DetailView match={routeProps.match} />
        }}
      />
    </Switch>
  )
}
export default App
