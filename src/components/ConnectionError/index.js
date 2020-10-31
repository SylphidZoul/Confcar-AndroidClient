import React, {useEffect} from 'react'
import { Text, View, StyleSheet, Modal } from 'react-native'
import { connect } from 'react-redux'
import Colors from '../../assets/Colors'

const ConnectionError = ({ visible }) => {
  return (
    <Modal
    animationType="fade"
    transparent
    visible={visible}
    >
      <View
        style={styles.container}
      >
        <Text style={styles.errorText}>
          No se ha podido comunicar al servidor. Verifica qué estás conectado a la red WiFi local.
        </Text>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: '10%',
    bottom: '10%',
    width: '80%',
    padding: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.red,
    backgroundColor: Colors.black,
  },
  errorText: {
    color: Colors.white,
    fontSize: 14,
    letterSpacing: 1,
    lineHeight: 18
  }
})

const mapStateToProps = (state) => ({ visible: state.general.connectionError })

export default connect(mapStateToProps)(ConnectionError)
