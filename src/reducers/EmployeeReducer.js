export const initialState = {
  employeeId: null,
  incorrectData: false,
  isFetching: false,
  isLoading: true,
  connectionError: false
}

const EmployeeReducer = (state, action) => {
  switch (action.type) {
    case 'TRY_LOGIN':
      return {
        ...state,
        isFetching: true,
        incorrectData: false
      }
    case 'FAILED_LOGIN': 
      return {
        ...state,
        isFetching: false,
        incorrectData: true
      }
    case 'SUCCESS_LOGIN':
      return {
        ...state,
        isFetching: false,
        incorrectData: false,
        employeeId: action.payload || null,
        isLoading: false
      }
    case 'FAILED_CONNECTION':
      return {
        ...state,
        connectionError: true,
        isFetching: false
      }
    case 'FAILED_STORAGE':
      return {
        ...state,
        isLoading: false
      }
    case 'RESET_ERROR':
      return {
        ...state,
        connectionError: false
      }
    default:
      return state
  }
}

export default EmployeeReducer
