import React from "react"

import { useJobContext } from "hooks/context"
import { Button } from "components/Button"

import "./HeaderCard.css"

export const HeaderCard = (props) => {
  const {
    jobData: { company_logo = "", company = "", company_url = "" },
  } = useJobContext()

  return (
    <div className="headerCard">
      <div className="logoContainer">
        <img src={company_logo} alt="company logo" />
      </div>
      <div className="companyInfo">
        <div className="companyMeta">
          <div className="companyName">{company}</div>
          <div className="companyWebsite">{company_url}</div>
        </div>
        <div className="companyWebsiteButton">
          <a href={company_url} target="_blank">
            <Button text="Company Site" />
          </a>
        </div>
      </div>
    </div>
  )
}
