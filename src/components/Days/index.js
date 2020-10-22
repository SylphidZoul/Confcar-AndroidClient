import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {View, Text, SectionList, StyleSheet} from 'react-native'
import DetailedDay from '../DetailedDay'
import Colors from '../../assets/Colors'

const DaysScreen = ({ route }) => {
  
  const getSections = () => {
    const dayNames = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']
    const sections = route.params.map((day) => {
      const dayNumber = new Date(day.day_date).getDay()
      return {
        title: dayNames[dayNumber - 1],
        data: [{
          Fecha: day.day_date,
          Entrada: `${day.day_start} hs.`,
          Almuerzo: `${day.lunch_start} hs.`,
          FinAlmuerzo: `${day.lunch_end} hs.`,
          Salida: `${day.day_end} hs.`,
          Pausa: `${day.extraPause_start} hs.`,
          FinPausa: `${day.extraPause_end} hs.`,
          HorasTrabajadas: `${day.workedHours} Hs:Min`
        }]
      }
    })

    return sections
  }

  return (
    <LinearGradient
      colors={[Colors.green, Colors.purple, Colors.purple, Colors.green]}
      locations={[0, 0.1, 0.96, 1]}
      style={styles.background}
    >
      <View style={styles.container}>
        <SectionList
          constyle={styles.section}
          sections={getSections()}
          keyExtractor={(item, index) => item.day_date + index}
          renderSectionHeader={({ section }) => (
            <View>
              <Text style={styles.sectionHeader}>
                {section.title}
              </Text>
            </View>
          )}
          renderItem={({ item }) => <DetailedDay day={item} />}
        />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '95%',
    marginTop: 56,
    marginBottom: 24,
    borderRadius: 8,
    backgroundColor: Colors.grey
  },
  section: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
  },
  sectionHeader: {
    paddingTop: 12,
    marginBottom: 4,
    color: Colors.green,
    fontSize: 20,
  }
})

export default DaysScreen
