import React from 'react';
import UserContextProvider from './src/Context';
import Navigations from './src/Navigations'

const App = () => {
  return (
    <UserContextProvider>
      <Navigations />
    </UserContextProvider>
  )
}

export default App
