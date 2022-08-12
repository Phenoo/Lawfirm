import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {motion} from 'framer-motion'
import {faBank, faDollarSign, faEuroSign, faHome, faPeace, faUserAlt,   } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import { useAnimations } from './useAnimations'

const data = [{
  id: 1,
  icon: faUserAlt,
  name: 'family law',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
},
{
  id: 2,
  icon: faDollarSign,
  name: 'business law',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
},{
  id:3,
  icon: faPeace,
  name: 'civil litigation',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
},{
  id: 4,
  icon: faEuroSign,
  name: 'Insurance defense',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
},{
  id: 5,
  icon: faHome,
  name: 'land & asset',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
},{
  id: 6,
  icon: faBank,
  name: 'financial law',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni sunt tempora et, eos id minima quasi suscipit doloremque cupiditate'
}
]

const Offers = () => {
  const {container, cata} = useAnimations();
  return (
    <section id='offers' className='offers'>
      <h4 className='tophead'>
        Our legal practice areas
      </h4>

      <motion.ul className="offers-cont" 
      initial='hidden'
      animate='visible'
      variants={container}>
        {
          data.map((item, index )=> (
            <motion.li className="box" key={index} variants={cata}>
              <span><FontAwesomeIcon icon={item.icon} /></span>
              <h6>{item.name}</h6>
              <p>{item.desc}</p>
              <Button title='learn more'/>
            </motion.li>
          ))
        }
      </motion.ul>
    </section>
  )
}

export default Offers