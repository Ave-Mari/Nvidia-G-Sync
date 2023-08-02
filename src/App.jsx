import { useState } from 'react'
import './App.scss'
//components
import Header from './components/Header/Header.jsx'
import Description from './components/Description/Description.jsx'
import Technologies from './components/Technologies/Technologies.jsx'
import Popup from './components/Popup/Popup.jsx'

function App() {

  return (
    <main>
      <Header />
      <div className="background">
      <Description />
      <Technologies />  
      </div>

      <Popup />
          
    </main>
  )
}

export default App
