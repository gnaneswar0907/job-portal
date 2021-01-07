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

export const FETCH_JOBS = createRequestTypes("FETCH_JOBS")
export const FETCH_JOB_DETAILS = createRequestTypes("FETCH_JOB_DETAILS")

export const initialState = {
  jobsData: [],
  dataLoading: false,
  selectedJobDetail: {},
}
