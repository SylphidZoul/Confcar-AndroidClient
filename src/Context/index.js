import React, { useEffect, createContext } from 'react'
import Http from '../libs/http'
import Storage from '../libs/storage'
const userContext = createContext()
const { Provider } = userContext

const UserContextProvider = ({ children }) => {
  const [ employeeId, setEmployeeId ] = useState('')

  const Login = async (data) => {
    try {
      const res = await Http.instance.post(data).body
      const stored = await Storage.instance.store('employeeId', res)
      setEmployeeId(res)
      console.log('Se guardo el id', stored)
    } catch (error) {
      
    }
  }

  return (
    <Provider>
      {children}
    </Provider>
  )
}

export default UserContextProvider
