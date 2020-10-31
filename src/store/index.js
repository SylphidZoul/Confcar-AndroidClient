import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-community/async-storage'
import rootReducer from '../reducers'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: null
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))

export let persistor = persistStore(store)

export default store