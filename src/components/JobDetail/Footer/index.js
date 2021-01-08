import React from "react"

import { useJobContext } from "hooks/context"
import { Button } from "components/Button"
import "./Footer.css"

export const Footer = (props) => {
  const { jobData = {}, darkMode } = useJobContext()
  return (
    <div
      className="detailFooter"
      style={{
        backgroundColor: darkMode ? "var(--lightBlue)" : "var(--white)",
      }}
    >
      <div
        className="jobTitle"
        style={{
          color: darkMode ? "var(--white)" : "var(--lightBlue)",
        }}
      >
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
