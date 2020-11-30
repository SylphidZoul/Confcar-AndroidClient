import generalReducer, {initialState} from '../../reducers/GeneralReducer'

describe('General reducer tests', () => {
  test('Should return same state', () => {
    expect(generalReducer(initialState, { type: ''})).toStrictEqual(initialState)
  })

  test('Should set isFetching true and clear errors messages', () => {
    const action = { type: 'TRY_LOGIN' }
    const state = { ...initialState, incorrectData: true }
    const expectedState = { ...initialState, isFetching: true, incorrectData: false}
    expect(generalReducer(state, action)).toStrictEqual(expectedState)
  })

  test('Should return login error message', () => {
    const action = { type: 'FAILED_LOGIN' }
    expect(generalReducer(initialState, action)).toStrictEqual({...initialState, incorrectData: true})  
  })

  test('Should return successful login state', () => {
    const state = {
      ...initialState,
      isFetching: true
    }
    const expectedState = {
      ...initialState,
      employeeId: 1,
    }
    const action = { type: 'SUCCESS_LOGIN', payload: 1}
    expect(generalReducer(state, action)).toStrictEqual(expectedState)
  })

  test('Should return every connection state', () => {
    let action = { type: 'TRY_FETCH' }
    let state = { ...initialState, isFetching: true}
    expect(generalReducer(initialState, action)).toStrictEqual(state)

    action.type = 'SUCCESS_FETCH'
    expect(generalReducer(state, action)).toStrictEqual({...state, isFetching: false})

    action.type = 'FAILED_CONNECTION'
    expect(generalReducer(state, action)).toStrictEqual({...initialState, connectionError: true})

    action.type = 'CLEAR_ERROR'
    state = { ...initialState, connectionError: true}
    expect(generalReducer(state, action)).toStrictEqual(initialState)
  })
})