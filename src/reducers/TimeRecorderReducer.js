import { MARK_TIME, SERVER_ERROR, NEW_DAY } from '../actions/TimeRecorderActions'

export const initialState = {
  btnText: 'Entrada',
  day: new Date(),
  hour: '',
  interval: 'Aún no comenzó el día.',
  isWorking: false,
  pauseAvailable: true,
  showMarkButton: true,
  showPauseButton: false
}

const TimeRecorderReducer = (state = initialState, action) => {
  switch (action.type) {
    case MARK_TIME:
      return {
        ...state,
        ...action.payload
      }
    case SERVER_ERROR:
      return {
        ...state,
        interval: action.payload,
        showMarkButton: false
      }
    case NEW_DAY:
      return initialState
    default:
      return state
  }
}

export default TimeRecorderReducer