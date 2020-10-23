import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../../Context'
import LoginScreen from './LoginScreen'

const LoginContainer = () => {
  const [ dni, setDni ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ connectionError, setConnectionError ] = useState(false)
  const { error, Login } = useContext(userContext)

  const handleSubmit = async () => {
    const data = { dni, password }
    const successful = await Login(data)
    if (!successful) {
      setConnectionError(true)
    }
  }

  const handleDni = (e) => {
    setDni(e.nativeEvent.text)
  }

  const handlePassword = (e) => {
    setPassword(e.nativeEvent.text)
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
      connectionError={connectionError}
      error={error}
    />
  )
}

export default LoginContainer
