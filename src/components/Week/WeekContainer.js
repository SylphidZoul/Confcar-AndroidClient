import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchDetails } from '../../actions/WeekActions'
import WeekScreen from './WeekScreen'

const WeekContainer = ({navigation, details, fetchDetails}) => {

  useEffect(() => {
    fetchDetails()
  }, [])

  const handlePress = () => {
    navigation.navigate('< DÍAS >', details.detailedDays)
  }

  return (
    <WeekScreen
      details={details}
      onPress={handlePress}
      isLoading={details.isFetching}
    />
  )
}

const mapStateToProps = (state) => ({
  details: {
    ...state.week,
    isFetching: state.general.isFetching
  }
})

const mapDispatchToProps = (dispatch) => ({
  fetchDetails: () => dispatch(fetchDetails())
})

export default connect(mapStateToProps, mapDispatchToProps)(WeekContainer)
