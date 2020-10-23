import React, { useState, useReducer, useEffect, useContext } from 'react'
import { Alert } from 'react-native'
import TimeRecorderReducer, { initialState } from '../../reducers/TimeRecorderReducer'
import { markTime, markExtraPause, initFromStorage } from '../../actions/TimeRecorderActions'
import { userContext } from '../../Context'
import Http from '../../libs/http'
import Storage from '../../libs/storage'
import TimeRecorderScreen from './TimeRecorderScreen'

const TimeRecorderContainer = () => {
  const [ state, dispatch ] = useReducer(TimeRecorderReducer, initialState)
  const [ connectionError, setConnectionError ] = useState(false)
  const { employeeId } = useContext(userContext)

  const handleMarkButton = () => {
    Alert.alert(`Marcar ${state.btnText}`, '¿Estás seguro?', [
      { text: 'Cancelar', onPress: () => {} },
      { text: 'Aceptar', onPress: async () => {
          try {
            const data = await Http.instance.post({ id: employeeId }, 'days')
            dispatch(markTime(data))
          } catch {
            setConnectionError(true)
          }
        }
      }
    ]) 
  }

  const handlePauseButton = () => {
    Alert.alert('Pausa extra', 'Sólo tienes 1 pausa extra por día, ¿continuar?', [
      { text: 'Cancelar', onPress: () => {} },
      { text: 'Continuar', onPress: async () => {
          try {
            const data = await Http.instance.post({ id: employeeId, extraPause: true }, 'days')
            dispatch(markExtraPause(data))
          } catch {
            setConnectionError(true)
          }
        }
      }
    ])
  }

  useEffect(() => {
    Storage.instance.get('timeState')
      .then(lastState => {
        dispatch(initFromStorage(lastState))
      })
      .catch(err => console.log('no hay state'))
  }, [])

  useEffect(() => {
    state.hour && Storage.instance.store('timeState', state)
  }, [state]);

  useEffect(() => {
    if (connectionError){
      setTimeout(() => {
        setConnectionError(false)
      }, 5000)
    }
  }, [connectionError])
  
  return (
    <TimeRecorderScreen
      state={state}
      error={connectionError}
      handleMarkButton={handleMarkButton}
      handlePauseButton={handlePauseButton}
    />
  )
}

export default TimeRecorderContainer
