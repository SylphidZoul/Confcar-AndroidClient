import React, {useContext} from 'react';
import {Image, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {userContext} from '../Context';
import TimeRecorderStack from '../stacks/TimeRecorderStack';
import WeekDetailStack from '../stacks/WeekDetailStack';
import LoginStack from '../stacks/LoginStack';
import Colors from '../assets/Colors';
import Clock from '../assets/clock.png';
import Schedule from '../assets/schedule.png';
import Profile from '../assets/profile.png';
import SplashScreen from '../components/SplashScreen';

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

const Navigations = () => {
  const { isLoading, employeeId } = useContext(userContext);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.green} />
      { isLoading
        ?
          <SplashScreen />
        :
          <Navigator tabBarOptions={barOptions}>
            {!employeeId
              ? (
                <Screen
                  name="Login"
                  component={LoginStack}
                  options={{
                    tabBarIcon: ({size, color}) => (
                      <Image
                        style={{tintColor: color, width: 35, height: 35}}
                        source={Profile}
                      />
                    ),
                  }}
                />
            ) : (
                <>
                  <Screen
                    name="Marcar Horario"
                    component={TimeRecorderStack}
                    options={{
                      tabBarIcon: ({size, color}) => (
                        <Image
                          style={{tintColor: color, width: 35, height: 35}}
                          source={Clock}
                        />
                      ),
                    }}
                  />
                  <Screen
                    name="Detalles"
                    component={WeekDetailStack}
                    options={{
                      tabBarIcon: ({size, color}) => (
                        <Image
                          style={{tintColor: color, width: 35, height: 35}}
                          source={Schedule}
                        />
                      ),
                    }}
                  />
                </>
            )}
          </Navigator>
      }
    </NavigationContainer>
  )
}

export default Navigations
