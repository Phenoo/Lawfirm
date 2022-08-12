import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './modal.scss'
const Modal = ({show}) => {
  return (
    <div className={`modal_Container ${show ? 'show' : ''}`}>
      <div className="modal">
        <header className='modal_header'>
          <h3 className='modal_title'>Message</h3>
          <button className='close'>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </header>
        <div className='content'>You have subscribed successfully</div>
        <div className="modal_footer">
        <button className="submit">OK</button>
        </div>
      </div>
    </div>
  )
}

export default Modal