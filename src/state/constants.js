/**
 * Takes the base request type and outputs REQUEST, SUCCESS and FAILURE types for the same
 * @param {string} base
 */
export function createRequestTypes(base) {
  return ["REQUEST", "SUCCESS", "FAILURE"].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export const initialState = {
  jobsData: [],
  dataLoading: false,
  selectedJobDetail: {},
  searchText: "",
  location: "",
  fullTimeFlag: false,
}

/** API ACTION TYPES */
export const FETCH_JOBS = createRequestTypes("FETCH_JOBS")
export const FETCH_JOB_DETAILS = createRequestTypes("FETCH_JOB_DETAILS")
export const LOAD_MORE_SUCCESS = "LOAD_MORE_SUCCESS"

/** STATE CHANGE ACTION TYPES */
export const ON_SEARCH_CHANGE = "ON_SEARCH_CHANGE"
export const ON_LOCATION_CHANGE = "ON_LOCATION_CHANGE"
export const ON_FULLTIME_TOGGLE = "ON_FULLTIME_TOGGLE"
