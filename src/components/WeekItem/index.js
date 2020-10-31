import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import Colors from '../../assets/Colors'

const WeekItem = ({ title, data, isLoading}) => {
  return (
    <View style={styles.container}>
      { isLoading
        ? (
          <ActivityIndicator color={Colors.green} size={50} />
          )
        : (
          <>
            <Text style={styles.title}>
              {title}
            </Text>
            <Text style={styles.data}>
              {data}
            </Text>
          </>
          )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '80%',
    paddingVertical: 18,
    borderLeftWidth: 16,
    borderLeftColor: Colors.green,
    borderRadius: 16,
    backgroundColor: Colors.white,
  },
  title: {
    marginBottom: 4,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: Colors.darkGrey,
  },
  data: {
    fontSize: 18,
    color: Colors.green
  }
})

export default WeekItem
