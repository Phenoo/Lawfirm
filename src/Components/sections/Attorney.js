import React from 'react'

import Lawyer1 from '../../subassets/Lawyer1.webp'
import Lawyer2 from '../../subassets/Lawyer2.webp'
import Lawyer3 from '../../subassets/Lawyer3.webp'
import Lawyer4 from '../../subassets/Lawyer4.jpeg'
import Lawyer5 from '../../subassets/lawyer7.jpeg'
import Lawyer6 from '../../subassets/lawyer5.jpeg'

const Attorney = () => {
  return (
    <section id='attorney' className='attorney'>
      <h4 className='tophead'>Our attorneys</h4>

      <div className="attorney-cont">
        <div className="profile">
          <img src={Lawyer1} alt="lawyer"  loading='lazy'/>
            <div className="overlay">
            <h4>James Will</h4>
            <p>We're proud that our law firm offers top quality</p>
          </div>
          
        </div>
        <div className="profile">
          <img src={Lawyer2} alt="lawyer" loading='lazy' />
          <div className="overlay">
            <h4>James Will</h4>
            <p>We're proud that our law firm offers top quality</p>
          </div>
        </div>
        <div className="profile">
          <img src={Lawyer3} alt="lawyer" loading='lazy' />
          <div className="overlay">
            <h4>James Will</h4>
            <p>We're proud that our law firm offers top quality</p>
          </div>
        </div>
        <div className="profile">
          <img src={Lawyer4} alt="lawyer" loading='lazy' />
          <div className="overlay">
            <h4>James Will</h4>
            <p>We're proud that our law firm offers top quality</p>
          </div>
        </div>
        <div className="profile">
          <img src={Lawyer5} alt="lawyer" loading='lazy' />
          <div className="overlay">
            <h4>James Will</h4>
            <p>We're proud that our law firm offers top quality</p>
          </div>
        </div>
        <div className="profile">
          <img src={Lawyer6} alt="lawyer" loading='lazy' />
          <div className="overlay">
            <h4>James Will</h4>
            <p>We're proud that our law firm offers top quality</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Attorney