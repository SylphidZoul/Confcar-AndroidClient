import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import PauseButton from '../PauseButton'
import MarkButton from '../MarkButton'
import Info from '../Info'
import Colors from '../../assets/Colors'

const TimeRecorderScreen = ({ state, handleMarkButton, handlePauseButton }) => {
  const {
    btnText, hour, isWorking, showPauseButton, showMarkButton,
    pauseAvailable, interval, isFetching
  } = state
    
  return (
    <LinearGradient
      colors={[Colors.green, Colors.purple]}
      locations={[0, 0.1]}
      style={{flex: 1}}
    >
      <View
        style={styles.container}
        >
        <Info
          isWorking={isWorking}
          hour={hour}
          interval={interval}
        />
        <View style={styles.buttons}>
          <MarkButton 
            onPress={handleMarkButton}
            isWorking={isWorking}
            text={btnText}
            show={showMarkButton}
            isFetching={isFetching}
            />
          <PauseButton
            onPress={handlePauseButton}
            isWorking={isWorking}
            show={(pauseAvailable && showPauseButton)}
            isFetching={isFetching}
            /> 
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 56,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: Colors.grey
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexGrow: 0.5,
    width: '100%',
  }
})

export default TimeRecorderScreen
