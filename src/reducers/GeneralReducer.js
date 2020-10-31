import {
  TRY_LOGIN,
  FAILED_LOGIN,
  SUCCESS_LOGIN,
  FAILED_CONNECTION,
  CLEAR_ERROR,
  TRY_FETCH,
  SUCCESS_FETCH
} from '../actions/GeneralActions'

export const initialState = {
  employeeId: null,
  incorrectData: false,
  isFetching: false,
  connectionError: false
}

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRY_LOGIN:
      return {
        ...state,
        isFetching: true,
        incorrectData: false
      }
    case FAILED_LOGIN: 
      return {
        ...state,
        isFetching: false,
        incorrectData: true
      }
    case SUCCESS_LOGIN:
      return {
        ...state,
        isFetching: false,
        incorrectData: false,
        employeeId: action.payload || null,
      }
    case TRY_FETCH:
      return {
        ...state,
        isFetching: true
      }
    case SUCCESS_FETCH:
      return {
        ...state,
        isFetching: false
      }
    case FAILED_CONNECTION:
      return {
        ...state,
        connectionError: true,
        isFetching: false
      }
    case CLEAR_ERROR:
      return {
        ...state,
        connectionError: false
      }
    default:
      return state
  }
}

export default generalReducer
