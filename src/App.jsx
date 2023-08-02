import { useState } from 'react'
import './App.scss'
//components
import Header from './components/Header/Header.jsx'
import Description from './components/Description/Description.jsx'
import Technologies from './components/Technologies/Technologies.jsx'
import Popup from './components/Popup/Popup.jsx'
import BurgerMenu from './components/BurgerMenu/BurgerMenu.jsx'

function App() {

  const [showPopup, setShowPopup] = useState(false);
  const [menu, setMenu] = useState(false);

  const clickToShow = () => {
    setShowPopup(true)
  }

  const clickToClose = () => {
    setShowPopup(false)
  }

  const showMenu = () => {
    setMenu(!menu);
  }

  return (
    <main>
      
      {showPopup ? 
        <div className="popup-container">
          <Popup clickToClose={clickToClose}/> 
        </div>      
      : null}   

      <Header showMenu={showMenu}/>

      {menu ? 
      <div className="menu-container">
        <BurgerMenu />
      </div>
      
      : null}   

      <div className="background">
      <Description />
      <Technologies clickToShow={clickToShow}/>  
      </div>

          
    </main>
  )
}

export default App
