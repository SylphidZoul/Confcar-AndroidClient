import React from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import ConnectionError from '../ConnectionError'
import Colors from '../../assets/Colors'
import Profile from '../../assets/profile.png'
import Logo from '../../assets/logo.png'

const LoginScreen = ({ dniValue, passwordValue, onDniChange, onPasswordChange, onSubmit, error, connectionError }) => {
  return (
    <LinearGradient
      colors={[Colors.green, Colors.purple]}
      locations={[0, 1]}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={Profile}
            style={styles.image}
          /> 
        </View>
        <Text style={styles.labels}>
          DNI
        </Text>
        <TextInput
          value={dniValue}
          keyboardType='numeric'
          onChange={onDniChange}
          style={styles.inputs}
        />
        <Text style={styles.labels}>
          Contraseña
        </Text>
        <TextInput
          value={passwordValue}
          textContentType='password'
          onChange={onPasswordChange}
          secureTextEntry
          style={styles.inputs}
        />
        { error &&
          <Text style={styles.errorText}>
            DNI o Contraseña incorrecta.
          </Text>
        }
        <Pressable
          style={styles.btn}
          onPress={onSubmit}
        >
          <Text style={styles.btnText}>
            Entrar
          </Text>
        </Pressable>
      </View>
        <Image
          source={Logo}
          style={styles.logo}
        />
        { connectionError &&
          <ConnectionError />
        }
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 64,
  },
  container: {
    width: '80%',
    alignItems: 'center',
    marginTop: 56,
    padding: 40,
    borderRadius: 8,
    backgroundColor: Colors.grey,
  },
  imageContainer: {
    position: 'absolute',
    top: -32,
    backgroundColor: Colors.white,
    borderRadius: 500
  },
  image:{
    tintColor: Colors.green,
    width: 64,
    height: 64,
  },
  labels: {
    width: '90%',
    color: Colors.darkGrey,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 4,
  },
  inputs: {
    width: '90%',
    borderWidth: 1,
    borderColor: Colors.darkGrey,
    borderRadius: 8,
    backgroundColor: Colors.white,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 2,
  },
  errorText: {
    color: Colors.red,
    fontWeight: '700',
    letterSpacing: 1
  },
  btn: {
    position: 'absolute',
    bottom: -24,
    width: '90%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 500,
    borderWidth: 2,
    backgroundColor: Colors.white,
    borderColor: Colors.green
  },
  btnText: {
    color: Colors.green,
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: 'JosefinSans-Regular',
    textAlign: 'center'
  },
  logo: {
    position: 'absolute',
    bottom: 0,
    width: 450,
    height: 234
  }
});

export default LoginScreen;
