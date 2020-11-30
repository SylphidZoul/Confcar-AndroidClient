import TimeRecorderReducer, {initialState} from '../../reducers/TimeRecorderReducer'

describe('TimeRecorder reducer tests', () => {
  test('Should return same state', () => {
    expect(TimeRecorderReducer(initialState, { type: ''})).toStrictEqual(initialState)
  })
  
  test('Should return state after marking a schedule', () => {
    const payload = {
      interval: 'Almuerzo finalizado:',
      hour:  '14 hs.',
      btnText: 'Salida',
      isWorking: true,
      showPauseButton: true
    }
    const action = { type: 'MARK_TIME', payload}
    expect(TimeRecorderReducer(initialState, action)).toStrictEqual({...initialState, ...payload})
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