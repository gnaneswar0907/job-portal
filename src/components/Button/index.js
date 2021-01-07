import React from "react"
import { DefaultButton } from "@fluentui/react"

import "./styles.css"

export const Button = ({ text = "", onClick = () => {} }) => (
  <DefaultButton className="modifiedButton" text={text} onClick={onClick} />
)
