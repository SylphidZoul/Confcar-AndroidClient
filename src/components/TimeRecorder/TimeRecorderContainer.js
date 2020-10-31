import React, { useEffect } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import { markTime, markExtraPause, checkDate } from '../../actions/TimeRecorderActions'
import TimeRecorderScreen from './TimeRecorderScreen'

const TimeRecorderContainer = ({ state, markTime, markExtraPause, checkDate }) => {

  useEffect(() => {
    checkDate()
  }, [])

  const handleMarkButton = () => {
    Alert.alert(`Marcar ${state.btnText}`, '¿Estás seguro?', [
      { text: 'Cancelar', onPress: () => {} },
      { text: 'Aceptar', onPress: () => markTime()}
    ]) 
  }

  const handlePauseButton = () => {
    Alert.alert('Pausa extra', 'Sólo tienes 1 pausa extra por día, ¿continuar?', [
      { text: 'Cancelar', onPress: () => {} },
      { text: 'Continuar', onPress: () => markExtraPause()}
    ])
  }
  
  return (
    <TimeRecorderScreen
      state={state}
      handleMarkButton={handleMarkButton}
      handlePauseButton={handlePauseButton}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    state: {
      ...state.timeRecorder,
      isFetching: state.general.isFetching
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    markTime: () => dispatch(markTime()),
    markExtraPause: () => dispatch(markExtraPause()),
    checkDate: () => dispatch(checkDate())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeRecorderContainer)
