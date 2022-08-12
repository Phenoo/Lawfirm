import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {useAnimations} from './useAnimations'
import {motion} from 'framer-motion'


const Button = ({title}) => {
  const {textReveal, transition} = useAnimations();
  return (
    <>
      <motion.button className='main-btn'
        variants={textReveal}
        initial='bananin'
        animate='bananon'
        transition={{...transition}}
      >
        {title}
        <span><FontAwesomeIcon icon={faArrowRight}/></span>
      </motion.button>
    </>
  )
}

export default Button