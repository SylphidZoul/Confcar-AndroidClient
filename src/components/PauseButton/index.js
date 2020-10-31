import React from 'react'
import { Text, Pressable, StyleSheet, ActivityIndicator } from 'react-native'
import Colors from '../../assets/Colors'

const PauseButton = ({ onPress, isWorking, show, isFetching }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.btn,
        isWorking
        ? styles.btnRed
        : styles.btnGreen,
        show && styles.btnShow
    ]}>
      {
        isFetching
        ? (
          <ActivityIndicator color={Colors.green} />
        )
        : (
          <Text style={[styles.btnText, isWorking && styles.redText]}>
            {isWorking ? 'Pausa Adicional' : 'Terminar pausa'}
          </Text>
        ) 
      }
    </Pressable>
  )
}

const styles = StyleSheet.create({
  btn: {
    display: "none",
    width: '80%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 500,
    borderWidth: 2,
    backgroundColor: Colors.white,
  },
  btnShow: {
    display: "flex"
  },
  btnGreen: {
    borderColor: Colors.green
  },
  btnRed: {
    borderColor: Colors.red
  },
  btnText: {
    color: Colors.green,
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: 'JosefinSans-Regular',
    textAlign: 'center'
  },
  redText: {
    color: Colors.red
  },
})

export default PauseButton
