import TimeRecorderReducer, {initialState} from '../../reducers/TimeRecorderReducer'
import { intervalMock } from '../../__mocks__/TimeRecorder'

describe('TimeRecorder reducer tests', () => {
  test('Should return same state', () => {
    expect(TimeRecorderReducer(initialState, { type: ''})).toStrictEqual(initialState)
  })
  
  test('Should return state after marking a schedule', () => {
    const action = { type: 'MARK_TIME', payload: intervalMock }
    expect(TimeRecorderReducer(initialState, action)).toStrictEqual({...initialState, ...intervalMock})
  })

  test('Should return the error from the server', () => {
    const errorMessage =  'Aún no comenzó el día laboral.'
    const action = { type: 'SERVER_ERROR', payload: errorMessage }
    const expectedState = { ...initialState, showMarkButton: false, interval: errorMessage}
    expect(TimeRecorderReducer(initialState, action)).toStrictEqual(expectedState)
  })

  test('Should return initialState when a new day starts', () => {
    const state = { btnText: 'Terminar almuerzo', interval: 'Almuerzo comenzado'}
    const action = { type: 'NEW_DAY'}
    expect(TimeRecorderReducer(state, action)).toStrictEqual(initialState)
  })
})