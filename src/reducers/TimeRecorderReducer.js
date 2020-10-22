import { MARK_TIME, INIT_FROM_STORAGE, SERVER_ERROR } from '../actions/TimeRecorderActions'

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

const TimeRecorderReducer = (state, action) => {
  switch (action.type) {
    case MARK_TIME:
      return {
        ...state,
        ...action.payload
      }
    case INIT_FROM_STORAGE:
      return {
        ...action.payload
      }
    case SERVER_ERROR:
      return {
        ...state,
        interval: action.payload
      }
    default:
      return state
  }
}

export default TimeRecorderReducer