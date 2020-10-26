import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../../Context'
import LoginScreen from './LoginScreen'

const LoginContainer = () => {
  const [ dni, setDni ] = useState('')
  const [ password, setPassword ] = useState('')
  const { incorrectData, isFetching, connectionError, Login } = useContext(userContext)

  const handleSubmit = () => {
    if (!dni || !password) return
    const data = { dni, password }
    Login(data)
  }

  const handleDni = (text) => {
    setDni(text)
  }

  const handlePassword = (text) => {
    setPassword(text)
  }

  return (
    <LoginScreen
      dniValue={dni}
      passwordValue={password}
      onDniChange={handleDni}
      onPasswordChange={handlePassword}
      onSubmit={handleSubmit}
      isFetching={isFetching}
      connectionError={connectionError}
      error={incorrectData}
    />
  )
}

export default LoginContainer
