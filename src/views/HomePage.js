import React, { useEffect, useReducer, useRef, useState } from "react"
import { isEmpty, isNil } from "ramda"

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
import { JobContext, useJobContext } from "hooks/context"
import { useLocation } from "hooks/useLocation"
import { usePrevious } from "hooks/usePrevious"
import { fetchAllJobs } from "state/actions"

import "./styles.css"

export const HomePage = (props) => {
  const [state, dispatch] = useReducer(jobsReducer, initialState)
  const [bottom, setBottom] = useState(false)
  const previousBottom = usePrevious(bottom)
  const pageYOffset = useRef(0)

  const { lat = null, long = null, locationLoaded } = useLocation()
  const { searchText, location, fullTime, jobsData, dataLoading, page } = state
  const { darkMode } = useJobContext()

  const getJobSearchParams = (useGeoLocation = false) => {
    const commonParams = {
      page,
      description: searchText,
      fullTime,
      loadMore: false,
    }
    return !isNil(lat) && !isNil(long) && isEmpty(location) && useGeoLocation
      ? { ...commonParams, lat, long }
      : { ...commonParams, location }
  }

  //FUNCTION TO HANDLE SCROLLING EVENT ONCE PAGE HITS BOTTOM
  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      if (scrollTop > 0) pageYOffset.current = scrollTop
      setBottom(true)
    }
  }

  //FETCH JOBS ON LOAD
  useEffect(() => {
    locationLoaded && fetchAllJobs(getJobSearchParams(true))(dispatch)
  }, [locationLoaded])

  useEffect(() => {
    if (jobsData.length > 0 && bottom) {
      fetchAllJobs({ ...getJobSearchParams(), loadMore: true, page: page + 1 })(
        dispatch
      )
    }
    if (previousBottom & !bottom) {
      window.scrollTo(0, pageYOffset.current)
    }
  }, [bottom])

  useEffect(() => {
    bottom && setBottom(false)
  }, [jobsData.length])

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

  const handleKeyUp = (e) => {
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
        ...useJobContext(),
      }}
    >
      <div
        className="homeContainer"
        style={{
          backgroundColor: darkMode ? "var(--darkBlue)" : "var(--lightGray)",
        }}
        onKeyUp={handleKeyUp}
        tabIndex={0}
      >
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
        <If condition={dataLoading || !locationLoaded}>
          <div style={{ height: "calc(100vh - 170px)" }}>
            <Spinner />
          </div>
        </If>
      </div>
    </JobContext.Provider>
  )
}
