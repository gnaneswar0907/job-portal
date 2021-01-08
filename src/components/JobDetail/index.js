import React from "react"

import { HeaderCard } from "components/HeaderCard"
import { Spinner } from "components/Spinner"
import { JobDescription } from "components/JobDescription"
import { HowToApply } from "components/HowToApply"
import { useJobContext } from "hooks/context"
import { Footer } from "./Footer"

import "./JobDetail.css"

export const JobDetail = ({ dataLoading = false }) => {
  const { darkMode } = useJobContext()
  return (
    <div>
      <If condition={!dataLoading}>
        <div
          className="jobDetail"
          style={{
            backgroundColor: darkMode ? "var(--darkBlue)" : "var(--lightGray)",
          }}
        >
          <HeaderCard />
          <JobDescription />
          <HowToApply />
        </div>
        <Footer />
      </If>
      <If condition={dataLoading}>
        <div style={{ height: "100vh" }}>
          <Spinner />
        </div>
      </If>
    </div>
  )
}
