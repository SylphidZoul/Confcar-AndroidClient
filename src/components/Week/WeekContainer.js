import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../../Context'
import Http from '../../libs/http'
import Storage from '../../libs/storage'
import WeekScreen from './WeekScreen'

const WeekContainer = ({navigation}) => {
  const [details, setDetails] = useState({})
  const [connectionError, setConnectionError] = useState(false)
  const [loading, setLoading] = useState(true)
  const { employeeId } = useContext(userContext)

  useEffect(() => {
    getWeekDetails()
  }, [])

  useEffect(() => {
    if (details.fullname) {
      console.log('se guarda el state', details)
      Storage.instance.store('WeekDetail', details)
    }
  }, [details])

  useEffect(() => {
    if (connectionError) {
      setTimeout(() => {
        setConnectionError(false)
      }, 5000)
    }
  }, [connectionError])

  const getWeekDetails = () => {
    Http.instance
      .get(`days/employee_id=${employeeId}`)
      .then((data) => {
        setDetails(data.body)
        setLoading(false)
      })
      .catch((e) => getFromStorage())
  }

  const getFromStorage = () => {
    setConnectionError(true)
    Storage.instance
      .get('WeekDetail')
      .then((data) => {
        setDetails(data)
        setLoading(false)
      })
      .catch((e) => console.log('No se pudo acceder a la red ni al storage.'))
  }

  const handlePress = () => {
    navigation.navigate('< DÍAS >', details.detailedDays)
  }

  return (
    <WeekScreen
      details={details}
      onPress={handlePress}
      error={connectionError}
      isLoading={loading}
    />
  )
}

export default WeekContainer
