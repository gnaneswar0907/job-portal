/** package imports */
import React from "react"
import ReactDOM from "react-dom"
import { initializeIcons } from "@uifabric/icons"

/** local imports */
import App from "./App"
import "./global.css"

initializeIcons()
ReactDOM.render(<App />, document.getElementById("root"))
