import { markTime, markExtraPause, checkDate } from '../../actions/TimeRecorderActions'
import { initialState } from '../../reducers/TimeRecorderReducer'
import { intervalMock, pauseMock } from '../../__mocks__/TimeRecorder'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore([thunk])

describe('TimeRecorder actions creators Tests', () => {
  beforeEach(() => {
    fetchMock.restore()
  })

  test('Should return a marked interval action', async () => {
    const response = {
      body: {
        day_start: '10:00'
      },
      error: false,
      status: 201
    }
    fetchMock.postOnce('http://localhost:3004/days', response)

    const expectedActions = [
      { type: 'TRY_FETCH' },
      { type: 'SUCCESS_FETCH' },
      { type: 'MARK_TIME', payload: intervalMock }
    ]

    const store = mockStore({...initialState, general: { employeeId: 1 }})
    await store.dispatch(markTime())
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('Should return a marked Pause action', async () => {
    const response = {
      body: {
        extraPause_end: '10:00'
      },
      error: false,
      status: 201
    }
    fetchMock.postOnce('http://localhost:3004/days', response)

    const expectedActions = [
      { type: 'TRY_FETCH' },
      { type: 'SUCCESS_FETCH' },
      { type: 'MARK_TIME', payload: pauseMock }
    ]

    const store = mockStore({...initialState, general: { employeeId: 1 }})
    await store.dispatch(markExtraPause())
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('Should throw a connection error action trying to mark', () => {
    fetchMock.postOnce('http://localhost:3004/days', '')
    const expectedActions = [
      { type: 'TRY_FETCH' },
      { type: 'FAILED_CONNECTION' },
      { type: 'TRY_FETCH' },
      { type: 'FAILED_CONNECTION' }
    ]

    const store = mockStore(initialState)

    store.dispatch(markTime())
    store.dispatch(markExtraPause())
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('Should return a new day action', () => {
    const store = mockStore({
      timeRecorder: {
        day: new Date(1995,11,17)
      }
    })
    const expectedActions = [{ type: 'NEW_DAY' }]
    store.dispatch(checkDate())
    expect(store.getActions()).toEqual(expectedActions)
  })
})