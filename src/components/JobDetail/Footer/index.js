import React from "react"

import { useJobContext } from "hooks/context"
import { Button } from "components/Button"
import "./Footer.css"

export const Footer = (props) => {
  const { jobData = {} } = useJobContext()
  return (
    <div className="detailFooter">
      <div className="jobTitle">
        {jobData?.title}
        <span className="jobMetaData" style={{ paddingLeft: "unset" }}>
          {jobData?.company}
        </span>
      </div>
      <div className="footerApply">
        <a href={jobData?.company_url} target="_blank">
          <Button text="Apply Now" />
        </a>
      </div>
    </div>
  )
}
