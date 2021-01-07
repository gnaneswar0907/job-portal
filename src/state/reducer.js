/** local imports */
import { FETCH_JOBS, FETCH_JOB_DETAILS, initialState } from "./constants"

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
  }
}
