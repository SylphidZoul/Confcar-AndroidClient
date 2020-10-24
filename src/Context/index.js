import React, { useState, useEffect, createContext } from 'react'
import Http from '../libs/http'
import Storage from '../libs/storage'

export const userContext = createContext()
const { Provider } = userContext

const UserContextProvider = ({ children }) => {
  const [ employeeId, setEmployeeId ] = useState('')
  const [ incorrectData, setIncorrectData ] = useState(false)
  const [ loading, setLoading ] = useState(true)

  const Login = async (data) => {
    setIncorrectData(false)
    try {
      const res = await Http.instance.post(data, 'employees')
      if (res.error) {
        setIncorrectData(true)
        return true
      }
      const employeeId = res.body.employee_id
      setEmployeeId(employeeId)
      const stored = await Storage.instance.store('employeeId', employeeId)
      console.log('Se guardo el id', stored)
      return true
      
    } catch (err) {
      return false
    }
  }

  const getIdFromStorage = async () => {
    setLoading(true)
    try {
      const stored = await Storage.instance.get('employeeId')
      if (stored) {
        setEmployeeId(stored)
      } 
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log('Error al recuperar el id del storage')
    }
  }

  useEffect(() => {
    getIdFromStorage()
  }, [])

  const value = {
    employeeId,
    loading,
    incorrectData,
    Login
  }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export default UserContextProvider
