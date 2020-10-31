import { combineReducers } from 'redux'
import timeRecorder from './TimeRecorderReducer'
import general from './GeneralReducer'
import week from './WeekReducer'

export default combineReducers({
  general,
  timeRecorder,
  week
})