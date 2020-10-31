import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WeekContainer from '../components/Week/WeekContainer'
import DaysScreen from '../components/Days'
import StackStyle from './StackStyles'

const { Navigator, Screen } = createStackNavigator()

const WeekDetailStack = () => {
  return (
    <Navigator screenOptions={StackStyle}>
      <Screen name='< DETALLES >' component={WeekContainer} />
      <Screen name='< DÍAS >' component={DaysScreen} />
    </Navigator>
  )
}

export default WeekDetailStack
