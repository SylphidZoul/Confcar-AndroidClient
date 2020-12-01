import WeekReducer, {initialState} from '../../reducers/WeekReducer'
import { detailedWeekMock } from '../../__mocks__/Week'

describe('Week reducer tests', () => {
  test('Should return same state', () => {
    expect(WeekReducer(initialState, { type: ''})).toStrictEqual(initialState)
  })

  test('Should return fetched data', () => {
    const action = { type: 'FETCH_DETAILS', payload: detailedWeekMock }
    expect(WeekReducer(initialState, action)).toStrictEqual(detailedWeekMock)
  })
})