import React from "react"
import ReactTimeAgo from "react-time-ago"
import { Icon } from "@fluentui/react"
import { isNil } from "ramda"

import { useJobContext } from "hooks/context"
import { Button } from "components/Button"

import "./JobDescription.css"

export const JobDescription = (props) => {
  const { jobData = {} } = useJobContext()

  console.log(jobData)
  return (
    <div className="jobDescription">
      <div className="jobInfoSection">
        <div style={{ width: "80%" }}>
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
          <div className="jobTitle">{jobData?.title}</div>
          <div className="jobLocation">{jobData?.location}</div>
        </div>
        <div style={{ width: "20%" }}>
          <a href={jobData?.company_url} target="_blank">
            <Button text="Apply Now" />
          </a>
        </div>
      </div>
      <div
        className="jobDescriptionContent"
        dangerouslySetInnerHTML={{ __html: jobData?.description }}
      />
    </div>
  )
}
