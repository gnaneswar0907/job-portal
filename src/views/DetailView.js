import React, { useReducer, useEffect } from "react"

import { Header } from "components/Header"
import { JobDetail } from "components/JobDetail"

import { fetchJobDetails } from "state/actions"
import { initialState } from "state/constants"
import { jobsReducer } from "state/reducer"
import { JobContext } from "hooks/context"

export const DetailView = ({
  match: {
    params: { id },
  },
}) => {
  const [state, dispatch] = useReducer(jobsReducer, initialState)

  const { selectedJobDetail, dataLoading } = state

  useEffect(() => {
    fetchJobDetails(id)(dispatch)
  }, [])

  return (
    <>
      <JobContext.Provider
        value={{
          jobData: selectedJobDetail,
        }}
      >
        <Header />
        <JobDetail dataLoading={dataLoading} />
      </JobContext.Provider>
    </>
  )
}
