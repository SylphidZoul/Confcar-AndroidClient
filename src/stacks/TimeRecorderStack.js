import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TimeRecorderContainer from '../components/TimeRecorder/TimeRecorderContainer'
import Colors from '../assets/Colors'

const { Navigator, Screen } = createStackNavigator()

const TimeRecorderStack = () => {
  return (
    <Navigator screenOptions={styles}>
      <Screen name='< MARCAR HORARIOS >' component={TimeRecorderContainer} />
    </Navigator>
  )
}

const styles = {
  headerTransparent: true,
  cardStyle: { backgroundColor: Colors.green },
  headerTitleAlign: 'center',
  headerTitleStyle: {
    color: Colors.white,
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
    letterSpacing: 2,
  }
}

export default TimeRecorderStack