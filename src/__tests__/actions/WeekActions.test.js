import { fetchDetails } from '../../actions/WeekActions'
import { initialState } from '../../reducers/WeekReducer'
import { detailedWeekMock } from '../../__mocks__/Week'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore([thunk])

describe('General action creators Tests', () => {
  beforeEach(() => {
    fetchMock.restore()
  })

  test('Should return the action with detailed week', async () => {
    const response = { body: detailedWeekMock, status: 200, error: false }
    fetchMock.getOnce('http://localhost:3004/days/employee_id=1', response)
    const { rawHours, ...payload } = detailedWeekMock
    const expectedActions = [
      { type: 'TRY_FETCH' },
      { type: 'SUCCESS_FETCH' },
      { type: 'FETCH_DETAILS', payload }
    ]
    const store = mockStore({...initialState, general: { employeeId: 1 }})

    await store.dispatch(fetchDetails())
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('Should throw a connection error action', async () => {
    fetchMock.getOnce('http://localhost:3004/days/employee_id=1', '')
    const expectedActions = [
      { type: 'TRY_FETCH' },
      { type: 'FAILED_CONNECTION' }
    ]
    const store = mockStore({...initialState, general: { employeeId: 1 }})

    await store.dispatch(fetchDetails())
    expect(store.getActions()).toEqual(expectedActions)
  })
})