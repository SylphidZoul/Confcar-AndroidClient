import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Colors from '../../assets/Colors'

const DetailedDay = ({day}) => {
  const keys = Object.keys(day)

  return (
    <View style={styles.container}>
      {keys.map((key, index) => (
        <View key={index} style={styles.field}>
          <Text style={styles.title}>{key}:</Text>
          <Text>{day[key]}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    padding: 16,
    paddingRight: 64,
    borderRadius: 8,
    borderLeftWidth: 12,
    borderLeftColor: Colors.green,
    backgroundColor: Colors.white,
  },
  field: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  title: {
    marginRight: 8,
    fontWeight: 'bold',
    color: Colors.darkGrey,
  },
})

export default DetailedDay
