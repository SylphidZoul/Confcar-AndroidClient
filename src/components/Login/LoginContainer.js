import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../../Context'
import LoginScreen from './LoginScreen'

const LoginContainer = () => {
  const [ dni, setDni ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ fetching, setFetching ] = useState(false)
  const [ connectionError, setConnectionError ] = useState(false)
  const { incorrectData, Login } = useContext(userContext)

  const handleSubmit = async () => {
    if (!dni || !password) return
    setFetching(true)
    const data = { dni, password }
    const successful = await Login(data)
    if (incorrectData || !successful) {
      setFetching(false)
    }
    if (!successful) {
      console.log('entro al not successful')
      setConnectionError(true)
    }
  }

  const handleDni = (text) => {
    setDni(text)
  }

  const handlePassword = (text) => {
    setPassword(text)
  }

  useEffect(() => {
    if(connectionError) {
      setTimeout(() => {
        setConnectionError(false)
      }, 5000)
    }
  }, [connectionError])

  return (
    <LoginScreen
      dniValue={dni}
      passwordValue={password}
      onDniChange={handleDni}
      onPasswordChange={handlePassword}
      onSubmit={handleSubmit}
      isFetching={fetching}
      connectionError={connectionError}
      error={incorrectData}
    />
  )
}

export default LoginContainer
