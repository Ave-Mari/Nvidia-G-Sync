import React from 'react';
//styles
import './Popup.scss'

export default function Popup({clickToClose}) {
  return (
    <div className='popup'>
      <button className='close' onClick={clickToClose}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2L2 18" stroke="white" stroke-width="2" stroke-linecap="round"/>
      <path d="M2 2L18 18" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
      </button>
      <h1>ПРЕИМУЩЕСТВА G-SYNC</h1>
    <form>
    <input type="text" placeholder="Имя"></input>
      <input type="text" placeholder="Mail"></input>
      <button type='submit'>КУПИТЬ</button>
    </form>  
    </div>
  )
}
