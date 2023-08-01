import React from 'react';
//img
import logo from './logo.svg';
import twitter from './tw.svg';
import instagram from './inst.svg';

export default function Header() {
  return (
    <header>
        <div className="menu">
            <div className="logo-block">
            <img src={logo} alt='nvidia logo'></img>
            </div>           
            <nav>
                <ul>
                    <li>
                        <a href="#">ПРОДУКТЫ</a>
                    </li>
                    <li>
                        <a href="#">ТЕХНОЛОГИИ</a>
                    </li>
                    <li>
                        <a href="#">EXPERIENCE</a>
                    </li>
                </ul>
            </nav>


        </div>
        <div className="social">
            <a href='' target='_blanc'>
                <img src={twitter} alt='twitter' />
            </a>
            <a href='' target='_blanc'>
                <img src={instagram} alt='instagram' />
            </a>
        </div>

    </header>
  )
}
