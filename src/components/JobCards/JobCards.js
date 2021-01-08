import { isEmpty } from "ramda"
import React from "react"

import { JobCard } from "./JobCard"
import "./JobCards.css"

export const JobCards = ({ jobs = [] }) => {
  return (
    <Choose>
      <When condition={!isEmpty(jobs)}>
        <div className="jobCardContainer">
          {jobs?.map((job, idx) => (
            <JobCard jobData={job} key={`_${job.id}_${idx}_`} />
          ))}
        </div>
      </When>
      <Otherwise>
        <div className="emptyJobs">No JOBS FOUND WITH GIVEN CONDITONS</div>
      </Otherwise>
    </Choose>
  )
}
