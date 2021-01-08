import React from "react"
import { Toggle, Icon } from "@fluentui/react"

import "./styles.css"

export const Header = ({ onDarkModeToggle = () => {}, darkMode = false }) => (
  <div className="headerContainer">
    <div className="headerText">
      <a href="/">devjobs</a>
    </div>
    <div className="darkModeToggle">
      <span className="toggleIcon" style={{ marginTop: "2px" }}>
        <Icon iconName="Sunny" />
      </span>
      <Toggle
        className="toggle"
        label=""
        checked={darkMode}
        onChange={onDarkModeToggle}
        styles={{
          pill: {
            backgroundColor: "var(--lightGray)",
            selectors: {
              [":hover"]: {
                backgroundColor: "var(--lightGray)",
              },
            },
          },
          thumb: {
            backgroundColor: "var(--purple)",
            selectors: {
              [":hover"]: {
                backgroundColor: "var(--purple)",
              },
            },
          },
        }}
      />
      <span className="toggleIcon" style={{ marginTop: "1px" }}>
        <Icon iconName="ClearNight" />
      </span>
    </div>
  </div>
)
