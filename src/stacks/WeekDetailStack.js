import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WeekContainer from '../components/Week/WeekContainer'
import DaysScreen from '../components/Days'
import Colors from '../assets/Colors'

const { Navigator, Screen } = createStackNavigator()

const WeekDetailStack = () => {
  return (
    <Navigator screenOptions={styles}>
      <Screen name='< DETALLES >' component={WeekContainer} />
      <Screen name='< DÍAS >' component={DaysScreen} />
    </Navigator>
  )
}

const styles = {
  cardStyle: { backgroundColor: Colors.green },
  headerTintColor: Colors.white,
  headerTransparent: true,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    color: Colors.white,
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
    letterSpacing: 2,
  },
}

export default WeekDetailStack