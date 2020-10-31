import React from 'react';
import { Provider } from 'react-redux'
import Navigations from './src/navigations'
import ConnectionError from './src/components/ConnectionError'
import store, { persistor } from './src/store'
import { PersistGate } from 'redux-persist/integration/react'
import SplashScreen from './src/components/SplashScreen'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={ <SplashScreen /> } persistor={persistor}>
        <Navigations />
        <ConnectionError />
      </PersistGate>
    </Provider>
  )
}

export default App
