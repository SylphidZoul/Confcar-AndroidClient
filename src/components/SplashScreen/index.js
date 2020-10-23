import React from 'react'
import { Text, Image, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Logo from '../../assets/logo2.png'
import Colors from '../../assets/Colors'

const SplashScreen = () => {
  return (
    <LinearGradient
      colors={[Colors.green, Colors.purple]}
      locations={[0, 0.7]}
      style={styles.container}
    >
      <Image 
        source={Logo}
        style={{width: 450, height: 234}}
      />
      <Text style={styles.subtitle}>
        Haciendo las mejores sábanas desde 1968.
      </Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    width: '70%',
    fontFamily: 'JosefinSans-Light',
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
    color: Colors.white
  }
})

export default SplashScreen
