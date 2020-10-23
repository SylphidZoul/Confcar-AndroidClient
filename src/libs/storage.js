import AsyncStorage from '@react-native-community/async-storage'

class Storage {
  static instance = new Storage()

  store = async (key, value) => {
    try {
      const valueStr = JSON.stringify(value)
      await AsyncStorage.setItem(key, valueStr)
      return true

    } catch (error) {
      console.log('Storage store error', error)

      return false
    }
  }

  get = async (key) => {
    try {
      const data = await AsyncStorage.getItem(key)
      const parsed = await JSON.parse(data)

      return parsed

    } catch (error) {
      console.log('Storage get error', error)

      throw Error(error)
    }
  }
}

export default Storage