import React, { useEffect, useReducer, useState, useRef } from "react"
import { isEmpty, isNil } from "ramda"

import { Header } from "components/Header"
import { SearchBox } from "components/SearchBox"
import { JobCards } from "components/JobCards"
import { Spinner } from "components/Spinner"
import {
  initialState,
  ON_SEARCH_CHANGE,
  ON_LOCATION_CHANGE,
  ON_FULLTIME_TOGGLE,
} from "state/constants"
import { jobsReducer } from "state/reducer"
import { JobContext } from "hooks/context"
import { useLocation } from "hooks/useLocation"
import { fetchAllJobs } from "state/actions"

import "./styles.css"

export const HomePage = (props) => {
  const [state, dispatch] = useReducer(jobsReducer, initialState)
  const page = useRef(0)
  const firstRun = useRef(true)
  const [bottom, setBottom] = useState(false)
  const { lat = null, long = null, locationLoaded } = useLocation()

  const { searchText, location, fullTime, jobsData, dataLoading } = state

  const getJobSearchParams = (useGeoLocation = false) => {
    const commonParams = {
      page: page.current,
      description: searchText,
      fullTime,
      loadMore: false,
    }
    return !isNil(lat) && !isNil(long) && isEmpty(location) && useGeoLocation
      ? { ...commonParams, lat, long }
      : { ...commonParams, location }
  }

  /** SCROLL EVENT HANDLER  */
  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      page.current = page.current + 1
      setBottom(true)
    }
  }

  //FETCH JOBS ON LOAD
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false
      return
    }
    fetchAllJobs(getJobSearchParams(true))(dispatch)
  }, [locationLoaded])

  useEffect(() => {
    if (jobsData.length !== 0 && bottom) {
      fetchAllJobs({ ...getJobSearchParams(), loadMore: true })(dispatch)
      setBottom(false)
    }
  }, [bottom])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /** STATE CHANGE HANDLERS */
  const handleSearchChange = (_, newValue) =>
    dispatch({ type: ON_SEARCH_CHANGE, payload: newValue })

  const handleLocationChange = (_, newValue) =>
    dispatch({ type: ON_LOCATION_CHANGE, payload: newValue })

  const handleCheckboxToggle = () => dispatch({ type: ON_FULLTIME_TOGGLE })

  const handleSearchClick = () => fetchAllJobs(getJobSearchParams())(dispatch)

  const handleKeyDown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.keyCode === 13) {
      handleSearchClick()
    }
  }

  return (
    <JobContext.Provider
      value={{
        searchText,
        location,
        fullTime,
      }}
    >
      <div className="homeContainer" onKeyDown={handleKeyDown} tabIndex={0}>
        <Header />
        <div className="jobSearchFilter">
          <SearchBox
            handleSearchChange={handleSearchChange}
            handleLocationChange={handleLocationChange}
            handleCheckboxToggle={handleCheckboxToggle}
            handleSearchClick={handleSearchClick}
          />
        </div>
        <div className="jobsContainer">
          {!dataLoading && <JobCards jobs={jobsData} />}
        </div>
        <If condition={dataLoading}>
          <div style={{ height: "calc(100vh - 170px)" }}>
            <Spinner />
          </div>
        </If>
      </div>
    </JobContext.Provider>
  )
}
