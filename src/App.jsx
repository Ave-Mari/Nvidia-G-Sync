import { useState } from 'react'
import './App.css'
//components
import Header from './components/Header.jsx'
import Description from './components/Description.jsx'
import Technologies from './components/Technologies.jsx'

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
