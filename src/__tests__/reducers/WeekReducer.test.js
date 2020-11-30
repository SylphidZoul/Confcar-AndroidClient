import WeekReducer, {initialState} from '../../reducers/WeekReducer'

describe('Week reducer tests', () => {
  test('Should return same state', () => {
    expect(WeekReducer(initialState, { type: ''})).toStrictEqual(initialState)
  })

  test('Should return fetched data', () => {
    const payload = {
      detailedDays: [],
      fullname: 'Agustin',
      weekHours: '45',
      weekPay: 9000
    }
    const action = { type: 'FETCH_DETAILS', payload }
    expect(WeekReducer(initialState, action)).toStrictEqual(payload)
  })
})