import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import {faPhone, faMailBulk, faLocationArrow, faClock } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo'
import Button from './Button'
import Modal from '../Modal'

const Footer = () => {

  const emailRef = useRef(null);
  const [modal, setModal] = useState(false);

  const Toggle = (e) => {
    e.preventDefault();
    setModal(!modal);
  }

  return (
    <section className="footer">
      <div className="foot-container">
      <div className="foot">
        <Logo />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam pariatur consectetur, magni enim libero sunt!</p>
        <ul>
          <li>
            <a href="www.facebook.com">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
          <a href="www.facebook.com">
          <FontAwesomeIcon icon={faFacebook}/>
          </a>
          </li>
          <li>
          <a href="www.facebook.com">
          <FontAwesomeIcon icon={faTwitter}/>
            </a>
          </li>
          <li><a href="www.facebook.com">
          <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
      <div className="foot2">
        <h4>useful links</h4>
        <ul>
          <li>
            <a href="/">
            about us
            </a>
          </li>
          <li>
            <a href="/">case style 01</a>
          </li>
          <li>
            <a href="/">contact us</a>
          </li>
          <li>
            <a href="/">corporate law</a>
          </li>
          <li>
            <a href="/">real estate law</a>
          </li>
        </ul>
      </div>
      <div className="foot3">
        <h4>office info</h4>
        <ul>
          <li>
              <FontAwesomeIcon icon={faPhone} />
              <p>
              +405-172-4723
              </p>
          </li>
          <li>
              <FontAwesomeIcon icon={faMailBulk} />
              <p>email@gmail.com</p>
          </li>
          <li>
              <FontAwesomeIcon icon={faLocationArrow} />
              <p>21 kings street 2100 australia</p>
          </li>
          <li>
              <FontAwesomeIcon icon={faClock} />
              <p>
                Mon to Fri 
                9.00 am to 6.00am
              </p>
          </li>
        </ul>
      </div>
      <div className="foot4">
        <h4>
          subscribe now
        </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <form action="" onSubmit={Toggle}>
          <div>
            <input type="email" name="email" id='email-foot' placeholder='your email address' ref={emailRef} required/>
            <Button title='subscribe now' />
            {
              modal && <Modal show={modal} />
            }
          </div>
        </form>
      </div>
      </div>
      <p id='copy'>&copy; 2021 - 2023 Justice.com</ p>
    </section>
  )
}

export default Footer