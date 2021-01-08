import React from "react"
import { Spinner as _Spinner, SpinnerSize } from "@fluentui/react"

import "./styles.css"

export const Spinner = () => (
  <div className="loaderStyle">
    <_Spinner size={SpinnerSize.large} />
  </div>
)
