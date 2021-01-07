import React from "react"
import { Toggle, Icon } from "@fluentui/react"

import "./styles.css"

export const Header = (props) => {
  const _onChange = () => console.log("clicked")
  return (
    <div className="headerContainer">
      <div className="headerText">
        <a href="/">devjobs</a>
      </div>
      <div className="darkModeToggle">
        <span className="toggleIcon">
          <Icon iconName="Sunny" />
        </span>
        <Toggle className="toggle" label="" onChange={_onChange} />
        <span className="toggleIcon">
          <Icon iconName="ClearNight" />
        </span>
      </div>
    </div>
  )
}
