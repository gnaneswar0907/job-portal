import React, { useEffect, useReducer, useState } from "react"

import { Header } from "components/Header"
import { SearchBox } from "components/SearchBox"
import {
  initialState,
  ON_SEARCH_CHANGE,
  ON_LOCATION_CHANGE,
  ON_FULLTIME_TOGGLE,
} from "state/constants"
import { jobsReducer } from "state/reducer"
import { JobContext } from "hooks/context"
import { fetchAllJobs, loadMoreJobs } from "state/actions"

import "./styles.css"

const HomePage = (props) => {
  const [state, dispatch] = useReducer(jobsReducer, initialState)
  const page = useRef(0)
  const [bottom, setBottom] = useState(false)

  const { searchText, location, fullTimeFlag, jobsData } = state

  const getJobSearchParams = () => ({
    page: page.current,
    description,
    location,
    fullTimeFlag,
    loadMore: false,
  })

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
    fetchAllJobs(getJobSearchParams())
  }, [])

  useEffect(() => {
    if (jobs.length !== 0 && bottom) {
      fetchAllJobs({ ...getJobSearchParams(), loadMore: true })
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

  const handleSearchClick = () => {
    const searchParams = {
      description: searchText,
      fullTime: fullTimeFlag,
      location,
      page: 1,
    }
    fetchAllJobs(searchParams)(dispatch)
  }

  console.log(jobsData)

  return (
    <JobContext.Provider
      value={{
        searchText,
        location,
        fullTimeFlag,
      }}
    >
      <div className="homeContainer">
        <Header />
        <div className="jobsContainer">
          <SearchBox
            handleSearchChange={handleSearchChange}
            handleLocationChange={handleLocationChange}
            handleCheckboxToggle={handleCheckboxToggle}
            handleSearchClick={handleSearchClick}
          />
          <div></div>
        </div>
      </div>
    </JobContext.Provider>
  )
}

export default HomePage
