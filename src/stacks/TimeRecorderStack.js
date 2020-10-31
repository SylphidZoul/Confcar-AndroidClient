import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TimeRecorderContainer from '../components/TimeRecorder/TimeRecorderContainer'
import StackStyle from './StackStyles'

const { Navigator, Screen } = createStackNavigator()

const TimeRecorderStack = () => {
  return (
    <Navigator screenOptions={StackStyle}>
      <Screen name='< MARCAR HORARIOS >' component={TimeRecorderContainer} />
    </Navigator>
  )}

export default TimeRecorderStack
