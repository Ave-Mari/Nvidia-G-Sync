import { useState } from 'react'
import './App.css'
//components
import Header from './components/Header/Header.jsx'
import Description from './components/Description/Description.jsx'
import Technologies from './components/Technologies/Technologies.jsx'

function App() {

  return (
    <main>
      <Header />
      <Description />
      <Technologies />      
    </main>
  )
}

export default App
