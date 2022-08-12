import {faFacebook, faInstagram, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react'
import Logo from './sections/Logo'



const Navigation = () => {
  const [isActive, setActive] = useState(false);


  return (
    <nav>
      <header>
        <Logo/>
        
        <div className={`nav-bar ${isActive ? 'show' : ''}`}>
          <button className='menu-btn' onClick={() => {setActive(!isActive)}}>
            <div></div>
          </button>
          <ul className='nav-links'>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#team">Our team</a>
            </li>
            <li>
              <a href="#experience">Fractos artas</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ul className="social-links">
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faFacebook}/>
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faInstagram}/>
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faTwitter}/>
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faLinkedin}/>
              </a>
            </li>
          </ul>

        </div>
      </header>
    </nav>
  )
}

export default Navigation