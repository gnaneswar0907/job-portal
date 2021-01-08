/** package imports */
import React, { useState } from "react"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"

import { HomePage, DetailView } from "./views"
import { Header } from "components/Header"
import { JobContext } from "hooks/context"

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const onDarkModeToggle = () => setDarkMode(!darkMode)

  return (
    <>
      <Header darkMode={darkMode} onDarkModeToggle={onDarkModeToggle} />
      <Router>
        <Switch>
          <JobContext.Provider value={{ darkMode }}>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route
              path="/:id"
              render={(routeProps) => {
                return <DetailView match={routeProps.match} />
              }}
            />
          </JobContext.Provider>
        </Switch>
      </Router>
    </>
  )
}
export default App
