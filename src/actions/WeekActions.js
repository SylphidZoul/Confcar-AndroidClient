import Http from '../libs/http'
import { tryFetch, successFetch, showConnectionError } from './GeneralActions'

export const FETCH_DETAILS = 'FETCH_DETAILS'

export const fetchDetails = () => async (dispatch, getState) => {
  const { general } = getState()
  dispatch(tryFetch())

  try {
    const details = await Http.instance.get(`days/employee_id=${general.employeeId}`)
    dispatch(successFetch())
    const { rawHours, ...rest } = details.body
    dispatch({ type: FETCH_DETAILS, payload: rest })
    
  } catch (error) {
    dispatch(showConnectionError())
  }
}