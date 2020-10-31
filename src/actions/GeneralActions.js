import Http from '../libs/http'

export const TRY_LOGIN = 'TRY_LOGIN'
export const FAILED_LOGIN = 'FAILED_LOGIN'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'
export const FAILED_CONNECTION = 'FAILED_CONNECTION'
export const CLEAR_ERROR = 'CLEAR_ERROR'
export const TRY_FETCH = 'TRY_FETCH'
export const SUCCESS_FETCH = 'SUCCESS_FETCH'

export const login = (data) => async (dispatch) => {
  dispatch({ type: TRY_LOGIN })
  try {
    const res = await Http.instance.post(data, 'employees')
    if (res.error) {
      return dispatch({ type: FAILED_LOGIN })
    }
    const employeeId = res.body.employee_id
    dispatch({ type: SUCCESS_LOGIN, payload: employeeId })
    
  } catch (err) {
    dispatch(showConnectionError())
  }
}

export const showConnectionError = () => (dispatch) => {
  dispatch({ type: FAILED_CONNECTION })
    setTimeout(() => {
      dispatch({ type: CLEAR_ERROR })
    }, 5000)
}

export const tryFetch = () => (dispatch) => {
  dispatch({ type: TRY_FETCH })
}

export const successFetch = () => (dispatch) => {
  dispatch({ type: SUCCESS_FETCH })
}
