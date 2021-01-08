/** package imports */
import React from "react"
import ReactDOM from "react-dom"
import { initializeIcons } from "@uifabric/icons"
import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en"

/** local imports */
import App from "./App"
import "./global.css"

/** Actions to run on app start up*/
initializeIcons()
TimeAgo.addDefaultLocale(en)

ReactDOM.render(<App />, document.getElementById("root"))
