import React from "react"
import { Link } from "react-router-dom"
import ReactTimeAgo from "react-time-ago"
import { Icon } from "@fluentui/react"
import { isNil } from "ramda"

import "./JobCard.css"

export const JobCard = ({ jobData = {} }) => (
  <Link
    className="jobCard"
    style={{ textDecoration: "none" }}
    to={`/${jobData.id}`}
  >
    <div className="imgContainer">
      <img src={`${jobData?.company_logo}`} alt="logo" />
    </div>
    <div style={{ paddingTop: "2%" }}>
      <div className="jobMetaData">
        {!isNil(jobData?.created_at) && (
          <ReactTimeAgo
            date={jobData?.created_at}
            locale="en-US"
            timeStyle="round-minute"
          />
        )}
        <span className="jobMetaDataSeperator">
          <Icon iconName="LocationDot" />
        </span>
        <span className="jobType">{jobData?.type}</span>
      </div>
      <div className="jobTitle">
        {jobData?.title}
        <span className="jobMetaData" style={{ paddingLeft: "unset" }}>
          {jobData?.company}
        </span>
      </div>
    </div>
    <div className="jobLocation">{jobData?.location}</div>
  </Link>
)
