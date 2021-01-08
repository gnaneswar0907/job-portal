import React from "react"

import { useJobContext } from "hooks/context"
import "./HowToApply.css"

export const HowToApply = (props) => {
  const { jobData = {} } = useJobContext()
  return (
    <div className="applyContainer">
      <h2 className="applyHeader">How To Apply</h2>
      <div dangerouslySetInnerHTML={{ __html: jobData?.how_to_apply }} />
    </div>
  )
}
