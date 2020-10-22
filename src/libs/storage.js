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

  multiGet = async (keys) => {
    try {
      return await AsyncStorage.multiGet(keys)

    } catch (error) {
      console.log('Storage multiGet error', error)

      throw Error(error)
    }
  }

  getAllKeys = async () => {
    try {
      return await AsyncStorage.getAllKeys()

    } catch (error) {
      console.log('Storage getAllKeys error', error)

      throw Error(error)
    }
  }

  remove = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
      return true

    } catch (error) {
      console.log('Storage remove error', error)

      return false
    }
  }
}

export default Storage