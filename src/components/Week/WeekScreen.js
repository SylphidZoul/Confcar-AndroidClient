import React from 'react'
import {View, Text, StyleSheet, Pressable, ActivityIndicator} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import WeekItem from '../WeekItem'
import Colors from '../../assets/Colors'

const WeekScreen = ({details, isLoading, onPress}) => {
  return (
    <LinearGradient
      colors={[Colors.green, Colors.purple]}
      locations={[0, 0.1]}
      style={{flex: 1}}>
      <View style={styles.container}>
        <WeekItem
          title={'Pesos acumulados:'}
          data={`$${details.weekPay}`}
          isLoading={isLoading}
        />
        <WeekItem
          title={'Nombre:'}
          data={details.fullname}
          isLoading={isLoading}
        />
        <WeekItem
          title={'Horas acumuladas:'}
          data={`${details.weekHours} hs.`}
          isLoading={isLoading}
        />
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.btnText}>Detalle de días</Text>
        </Pressable>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 56,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: Colors.grey,
  },
  button: {
    alignItems: 'center',
    width: '80%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 500,
    borderWidth: 2,
    borderColor: Colors.green,
    backgroundColor: Colors.white,
  },
  btnText: {
    color: Colors.green,
    fontSize: 16,
    fontFamily: 'JosefinSans-Regular',
    letterSpacing: 1,
  },
})

export default WeekScreen
