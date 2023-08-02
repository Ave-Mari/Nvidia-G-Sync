import React from 'react';
//styles
import './Popup.scss'

export default function Popup() {
  return (
    <div className='popup'>
      <h1>ПРЕИМУЩЕСТВА G-SYNC</h1>
    <form>
    <input type="text" placeholder="Имя"></input>
      <input type="text" placeholder="Mail"></input>
      <button type='submit'>КУПИТЬ</button>
    </form>  
    </div>
  )
}
