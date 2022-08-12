import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGavel } from '@fortawesome/free-solid-svg-icons'


const Logo = () => {
  return (
    <div className='logo'>
      <FontAwesomeIcon icon={faGavel} />
      <h4>justice</h4>
    </div>
  )
}

export default Logo