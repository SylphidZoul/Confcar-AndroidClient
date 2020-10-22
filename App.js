import React from 'react';
import { Image, StatusBar } from 'react-native';;
import {NavigationContainer} from '@react-navigation/native';;
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';;
import TimeRecorderStack from './src/stacks/TimeRecorderStack';
import WeekDetailStack from './src/stacks/WeekDetailStack';
import Colors from './src/assets/Colors';
import Clock from './src/assets/clock.png';
import Schedule from './src/assets/schedule.png';

const {Navigator, Screen} = createBottomTabNavigator();;

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.green} />
      <Navigator
        tabBarOptions={{
          activeTintColor: Colors.green,
          inactiveTintColor: Colors.darkGrey,
          showLabel: false,
          style: {
            backgroundColor: Colors.white,
            borderTopColor: Colors.white,
            borderTopWidth: 1,
          },
        }}>
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
      </Navigator>
    </NavigationContainer>
  )
}

export default App
