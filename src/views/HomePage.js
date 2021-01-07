import React from "react"

import { Header } from "components/Header"
import { SearchBox } from "components/SearchBox"

import "./styles.css"

const HomePage = (props) => {
  return (
    <div className="homeContainer">
      <Header />
      <div className="jobsContainer">
        <SearchBox />
      </div>
    </div>
  )
}

export default HomePage
