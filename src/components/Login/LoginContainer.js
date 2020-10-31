import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/GeneralActions'
import LoginScreen from './LoginScreen'

const LoginContainer = ({ incorrectData, isFetching, employeeId, login }) => {
  const [ dni, setDni ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = () => {
    if (!dni || !password) return
    const data = { dni, password }
    login(data)
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
      error={incorrectData}
    />
  )
}

const mapStateToProps = (state) => state.general
const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
