import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginContainer from '../components/Login/LoginContainer'
import StackStyle from './StackStyles'

const { Navigator, Screen } = createStackNavigator()

const TimeRecorderStack = () => {
  return (
    <Navigator screenOptions={StackStyle}>
      <Screen name='< INGRESA >' component={LoginContainer} />
    </Navigator>
  )
}

export default TimeRecorderStack
