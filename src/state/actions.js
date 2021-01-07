/** local imports */
import api from "../api"
import { FETCH_JOBS, FETCH_JOB_DETAILS, LOAD_MORE_SUCCESS } from "./constants"

/** API ACTIONS */

/** GET ALL JOBS BASED ON OPTIONS SELECTED */
export const fetchAllJobs = (params) => (dispatch) => {
  dispatch({ type: FETCH_JOBS.REQUEST })
  api
    .get(
      `/positions.json?page=${params.page}&description=${params.description}&full_time=${params.fullTime}&location=${params.location}`
    )
    .then((response) => {
      dispatch({
        type: params.loadMore ? LOAD_MORE_SUCCESS : FETCH_JOBS.SUCCESS,
        payload: response.data,
      })
    })
    .catch((err) => {
      dispatch({ type: FETCH_JOBS.FAILURE, payload: err })
    })
}

/** GET SEPCIFIC JOB DETAILS */
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
