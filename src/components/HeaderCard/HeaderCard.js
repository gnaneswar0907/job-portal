import React from "react"

import { useJobContext } from "hooks/context"
import { useWindowSize } from "hooks/useWindowSize"
import { Button } from "components/Button"

import "./HeaderCard.css"

export const HeaderCard = (props) => {
  const {
    jobData: { company_logo = "", company = "", company_url = "" },
    darkMode,
  } = useJobContext()

  const { width } = useWindowSize()

  return (
    <Choose>
      <When condition={width < 641}>
        <div
          className="mobileHeaderCard"
          style={{
            backgroundColor: darkMode ? "var(--lightBlue)" : "var(--white)",
          }}
        >
          <div
            className="mobileHeaderCardImg"
            style={{
              backgroundColor: darkMode ? "var(--lightBlue)" : "var(--white)",
            }}
          >
            <img src={`${company_logo}`} alt="logo" />
          </div>
          <div style={{ paddingTop: width < 641 ? "7%" : "12%" }}>
            <div
              className="mobileJobTitle"
              style={{ color: darkMode ? "var(--white)" : "var(--lightBlue)" }}
            >
              {company}
              <span className="mobileJobMeta" style={{ paddingLeft: "unset" }}>
                {company_url}
              </span>
            </div>
          </div>
          <div className="companyWebsiteButton">
            <a href={company_url} target="_blank">
              <Button text="Company Site" />
            </a>
          </div>
        </div>
      </When>
      <Otherwise>
        <div
          className="headerCard"
          style={{
            backgroundColor: darkMode ? "var(--lightBlue)" : "var(--white)",
          }}
        >
          <div className="logoContainer">
            <img src={company_logo} alt="company logo" />
          </div>
          <div className="companyInfo">
            <div className="companyMeta">
              <div
                className="companyName"
                style={{
                  color: darkMode ? "var(--white)" : "var(--lightBlue)",
                }}
              >
                {company}
              </div>
              <div className="companyWebsite">{company_url}</div>
            </div>
            <div className="companyWebsiteButton">
              <a href={company_url} target="_blank">
                <Button text="Company Site" />
              </a>
            </div>
          </div>
        </div>
      </Otherwise>
    </Choose>
  )
}
