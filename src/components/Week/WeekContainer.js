import React, { useState, useEffect } from 'react'
import Http from '../../libs/http'
import Storage from '../../libs/storage'
import WeekScreen from './WeekScreen'

const employee_id = 1

const WeekContainer = ({ navigation }) => {
  const [ details, setDetails ] = useState({})
  const [ connectionError, setConnectionError ] = useState(false)

  useEffect(() => {
    getWeekDetails()
  }, [])

  useEffect(() => {
    if(details.fullname) {
      console.log('se guarda el state', details)
      Storage.instance.store('WeekDetail', details)
    }
  }, [details])

  useEffect(() => {
    if (connectionError){
      setTimeout(() => {
        setConnectionError(false)
      }, 5000)
    }
  }, [connectionError])

  const getWeekDetails = () => {
    Http.instance.get(`days/employee_id=${employee_id}&week=42`)
      .then(data => {
        console.log('se obtuvo desde la api', data)
        setDetails(data.body)
      })
      .catch(e => getFromStorage())
  }

  const getFromStorage = () => {
    setConnectionError(true)
    Storage.instance.get('WeekDetail')
      .then(data => {
        console.log('se obtuvo desde el storage', data)
        setDetails(data)
      })
      .catch(e => console.log('No se pudo acceder a la red ni al storage.'))
  }

  const handlePress = () => {
    navigation.navigate('< DÍAS >', details.detailedDays)
  }

  return (
    <WeekScreen
      details={details}
      onPress={handlePress}
      error={connectionError}
    />
  )
}

export default WeekContainer
