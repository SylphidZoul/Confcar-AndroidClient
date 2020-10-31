import React from 'react'
import {Image, StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {connect} from 'react-redux'
import TimeRecorderStack from '../stacks/TimeRecorderStack'
import WeekDetailStack from '../stacks/WeekDetailStack'
import LoginStack from '../stacks/LoginStack'
import Colors from '../assets/Colors'
import Clock from '../assets/clock.png'
import Schedule from '../assets/schedule.png'
import Profile from '../assets/profile.png'

const {Navigator, Screen} = createBottomTabNavigator();

const barOptions = {
  activeTintColor: Colors.green,
  inactiveTintColor: Colors.darkGrey,
  showLabel: false,
  style: {
    backgroundColor: Colors.white,
    borderTopColor: Colors.white,
    borderTopWidth: 1,
  }
}

const getIcon = ({color}, source) => (
  <Image
    style={{tintColor: color, width: 35, height: 35}}
    source={source}
  />
)

const Navigations = ({ isAuth }) => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.green} />
        <Navigator tabBarOptions={barOptions}>
          {!isAuth
            ? (
              <Screen
                name="Login"
                component={LoginStack}
                options={{
                  tabBarIcon: (state) => getIcon(state, Profile)
                }}
              />
            ) 
            : (
              <>
                <Screen
                  name="Marcar Horario"
                  component={TimeRecorderStack}
                  options={{
                    tabBarIcon: (state) => getIcon(state, Clock),
                  }}
                />
                <Screen
                  name="Detalles"
                  component={WeekDetailStack}
                  options={{
                    tabBarIcon: (state) => getIcon(state, Schedule),
                  }}
                />
              </>
            )
          }
        </Navigator>
    </NavigationContainer>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.general.employeeId
})

export default connect(mapStateToProps)(Navigations)
