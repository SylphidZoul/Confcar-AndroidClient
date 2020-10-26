import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Working from '../../assets/Working.png'
import Rest from '../../assets/rest.png'
import Colors from '../../assets/Colors'

const Info = ({ isWorking, hour, interval }) => {
  return (
    <View style={[styles.container, !isWorking && styles.borderRed]}>
      <View style={styles.status}>
        <Text style={styles.title}>
          Estado:
        </Text>
        <Text style={styles.statusTxt}>
          { isWorking ? 'Trabajando.' : 'Descansando.' }
        </Text>
      </View>
      <View style={styles.status}>
        <Text style={styles.hourTxt}>
          { interval }
        </Text>
        <Text style={styles.hourTxt}>
          { hour }
        </Text>
      </View>
      <Image 
      source={isWorking ? Working : Rest}
      style={{ width: 100, height: 100}}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '80%',
    paddingVertical: 24,
    borderLeftWidth: 16,
    borderLeftColor: Colors.green,
    borderRadius: 16,
    backgroundColor: Colors.white,
  },
  borderRed: {
    borderLeftColor: Colors.red
  },
  status: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 4,
    justifyContent: 'center'
  },
  title: {
    marginRight: 4,
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1
  },
  statusTxt: {
    fontSize: 18
  },
  hourTxt: {
    marginRight: 8,
    fontSize: 16,
    fontWeight: '700',
    color: Colors.darkGrey,
    letterSpacing: 1
  }
})

export default Info
