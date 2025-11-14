import React, { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {


  return (
    <ThemeProvider>
      <Sidebar/>
      <Main/>  
    </ThemeProvider>
  )
}

export default App
