import { login, showConnectionError } from '../../actions/GeneralActions'
import { initialState } from '../../reducers/GeneralReducer'
import '../../libs/http'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore([thunk])

describe('General action creators Tests', () => {
  beforeEach(() => {
    fetchMock.restore()
  })

  test('Should return a successful login action', async () => {
    const response = { body: {employee_id: 1}, error: false, status: 202 }
    fetchMock.postOnce('http://localhost:3004/employees', response)
    const expectedActions = [
      { type: 'TRY_LOGIN' },
      { type: 'SUCCESS_LOGIN', payload: 1 }
    ]
    const store = mockStore(initialState)

    await store.dispatch(login())
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('Should return a failed login action', async () => {
    const response = { body: 'Datos incorrectos.', error: true, status: 404 }
    fetchMock.postOnce('http://localhost:3004/employees', response)
    const expectedActions = [
      { type: 'TRY_LOGIN' },
      { type: 'FAILED_LOGIN' }
    ]
    const store = mockStore(initialState)

    await store.dispatch(login())
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('Should return show connection error action and clear it after 5 seconds', (done) => {
    const expectedActions = [
      { type: 'FAILED_CONNECTION' },
      { type: 'CLEAR_ERROR' }
    ]
    const store = mockStore(initialState)

    store.dispatch(showConnectionError())
    setTimeout(() => {
      expect(store.getActions()).toEqual(expectedActions)
      done()
    }, 5000)
  }, 5100)

})
