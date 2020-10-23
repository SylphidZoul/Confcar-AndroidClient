import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Colors from '../assets/Colors'
import LoginContainer from '../components/Login/LoginContainer'

const { Navigator, Screen } = createStackNavigator()

const TimeRecorderStack = () => {
  return (
    <Navigator screenOptions={styles}>
      <Screen name='< INGRESA >' component={LoginContainer} />
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