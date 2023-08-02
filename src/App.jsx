import { useState } from 'react'
import './App.scss'
//components
import Header from './components/Header/Header.jsx'
import Description from './components/Description/Description.jsx'
import Technologies from './components/Technologies/Technologies.jsx'
import Popup from './components/Popup/Popup.jsx'

function App() {

  const [showPopup, setShowPopup] = useState(false);

  const clickToShow = () => {
    setShowPopup(true)
  }

  const clickToClose = () => {
    setShowPopup(false)
  }

  return (
    <main>
      
      {showPopup ? 
        <div className="popup-container">
          <Popup clickToClose={clickToClose}/> 
        </div>      
      : null}   
      <Header />
      <div className="background">
      <Description />
      <Technologies clickToShow={clickToShow}/>  
      </div>

          
    </main>
  )
}

export default App
