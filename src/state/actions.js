/** local imports */
import api from "api"
import { FETCH_JOBS, FETCH_JOB_DETAILS } from "./constants"

export const fetchAllJobs = (params) => (dispatch) => {
  dispatch({ type: FETCH_JOBS.REQUEST })
  api
    .get(
      `/positions.json?page=${params.page}&description=${params.description}&full_time=${params.fullTime}&location=${params.location}&lat=${params.geo.latitude}&long=${params.geo.longitude}`
    )
    .then((response) => {
      dispatch({ type: FETCH_JOBS.SUCCESS, payload: response.data })
    })
    .catch((err) => {
      dispatch({ type: FETCH_JOBS.FAILURE, payload: err })
    })
}

export const fetchJobDetails = (id) => (dispatch) => {
  dispatch({ type: FETCH_JOB_DETAILS.REQUEST })
  api
    .get(`/positions/${id}.json?markdown=true`)
    .then((response) => {
      dispatch({ type: FETCH_JOB_DETAILS.SUCCESS, payload: response.data })
    })
    .catch((err) => {
      dispatch({ type: FETCH_JOB_DETAILS.FAILURE, payload: err })
    })
}
