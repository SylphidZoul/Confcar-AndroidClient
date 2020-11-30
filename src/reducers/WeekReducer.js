export const initialState = {
  detailedDays: [],
  fullname: '',
  weekHours: '',
  weekPay: 0
}

const weekReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DETAILS':
      return {
        ...action.payload
      }
    default:
      return state
  }
}

export default weekReducer
