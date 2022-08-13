import {faFacebook, faInstagram, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react'
import Logo from './sections/Logo'



const Navigation = () => {
  const [isActive, setActive] = useState(false);
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
    setActive(!isActive)
  }
  return (
    <nav>
      <header>
        <Logo/>
        
        <div className={`nav-bar ${isActive ? 'show' : ''}`}>
          <button className='menu-btn' onClick={() => {setActive(!isActive)}}>
            <div></div>
          </button>
          <ul className='nav-links'>
            <li onClick={() => scrollTo('experts')}>
              <a href="/">Home</a>
            </li>
            <li onClick={() => scrollTo('work')}>
              <a href="#about">About us</a>
            </li>
            <li onClick={() => scrollTo('attorney')}>
              <a href="#team">Our team</a>
            </li>
            <li onClick={() => scrollTo('offers')}>
              <a href="#experience">Fractos artas</a>
            </li>
            <li onClick={() => scrollTo('request')}>
              <a href="#contact">Request</a>
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