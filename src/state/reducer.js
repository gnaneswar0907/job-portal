/** package imports */
import { concat } from "ramda"

/** local imports */
import {
  FETCH_JOBS,
  FETCH_JOB_DETAILS,
  initialState,
  ON_SEARCH_CHANGE,
  ON_LOCATION_CHANGE,
  ON_FULLTIME_TOGGLE,
  LOAD_MORE_SUCCESS,
} from "./constants"

export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS.REQUEST:
      return { ...state, dataLoading: true }
    case FETCH_JOB_DETAILS.REQUEST:
      return { ...state, dataLoading: true }
    case FETCH_JOBS.SUCCESS:
      return { ...state, jobsData: action.payload, dataLoading: false }
    case FETCH_JOB_DETAILS.SUCCESS:
      return { ...state, selectedJobDetail: action.payload, dataLoading: false }
    case FETCH_JOBS.FAILURE:
      return { ...state, dataLoading: false }
    case FETCH_JOB_DETAILS.FAILURE:
      return { ...state, dataLoading: false }
    case ON_SEARCH_CHANGE:
      return { ...state, searchText: action.payload }
    case ON_LOCATION_CHANGE:
      return { ...state, location: action.payload }
    case ON_FULLTIME_TOGGLE:
      return { ...state, fullTimeFlag: !state.fullTimeFlag }
    case LOAD_MORE_SUCCESS:
      return { ...state, jobsData: concat(state.jobsData, action.payload) }
  }
}
