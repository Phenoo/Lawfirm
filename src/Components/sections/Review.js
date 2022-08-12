import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons'


import ReviewImg from '../../subassets/lawyer5.jpeg';
import ReviewImg2 from '../../subassets/Lawyer2.webp';

const Review = () => {
  return (
    <section id='review' className='review'>
      <h4 className="tophead">what our clients say</h4>
      <div className="review-container">
        <div className="review-img">
          <img src={ReviewImg} alt="review" />
        </div>
        <div className="review-text">
          <div className="review-part1">
            <img src={ReviewImg2} alt="review" />
            <span>
              <h4>justin pierre</h4>
              <h6>new york city</h6>
            </span>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, inventore! Doloribus vitae iusto optio, expedita quam velit ducimus magni quod.</p>
          <div className="review-svg">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} color='gray' />
          </div>
          <div className="review-btns">
            <button><FontAwesomeIcon icon={faChevronLeft}/></button>
            <button>
            <FontAwesomeIcon icon={faChevronRight}/>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review