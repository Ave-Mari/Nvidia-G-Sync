import React from 'react';
//img
import logo from './logo.svg';

export default function Header() {
  return (
    <header>
        <div className="menu">
            <img src={logo} alt='nvidia logo'></img>
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

            </a>
            <a href='' target='_blanc'>

            </a>
        </div>

    </header>
  )
}
