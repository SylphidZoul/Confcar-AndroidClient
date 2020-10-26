import React, { useEffect, createContext, useReducer } from 'react'
import Http from '../libs/http'
import Storage from '../libs/storage'
import EmployeeReducer, { initialState } from '../reducers/EmployeeReducer'

export const userContext = createContext()
const { Provider } = userContext

const UserContextProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(EmployeeReducer, initialState)
  const { employeeId, incorrectData, isFetching, isLoading, connectionError } = state

  const Login = async (data) => {
    dispatch({ type: 'TRY_LOGIN' })
    try {
      const res = await Http.instance.post(data, 'employees')
      if (res.error) {
        dispatch({ type: 'FAILED_LOGIN'} )
        return
      }
      const employeeId = res.body.employee_id

      const stored = await Storage.instance.store('employeeId', employeeId)
      console.log('Se guardo el id', stored)
      dispatch({ type: 'SUCCESS_LOGIN', payload: employeeId })
      
    } catch (err) {
      dispatch({ type: 'FAILED_CONNECTION' })
    }
  }

  const getIdFromStorage = async () => {
    try {
      const stored = await Storage.instance.get('employeeId')
      dispatch({ type: 'SUCCESS_LOGIN', payload: stored })
    } catch (error) {
      dispatch({ type: 'FAILED_STORAGE'})
      console.log('Error al recuperar el id del storage')
    }
  }

  useEffect(() => {
    console.log(state)
  })

  useEffect(() => {
    getIdFromStorage()
  }, [])

  useEffect(() => {
    if(connectionError) {
      setTimeout(() => {
        dispatch({ type: 'RESET_ERROR' })
      }, 5000)
    }
  }, [connectionError])

  const value = {
    employeeId,
    incorrectData,
    isFetching,
    isLoading,
    connectionError,
    Login
  }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export default UserContextProvider
