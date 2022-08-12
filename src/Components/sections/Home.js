import React from 'react'
import {motion} from 'framer-motion'
import { useAnimations } from './useAnimations'

import LadyJustice from '../../subassets/lady-justice.jpg'
import Button from './Button'
import Judge from '../../subassets/undraw_judge_katerina_limpitsouni_ny1q.png'

const Home = () => {
  const { transition, textReveal } = useAnimations();
  // })
  return (
    <>
      <section id='home' className='home'>
        <div className='home-text'>
          <motion.h1 
            variants={textReveal}
            initial='bananin'
            animate='bananon'
            transition={{...transition, delay: 0.3}}
          >Reputation.</motion.h1>
          <motion.h1 className='dent'
            variants={textReveal}
            initial='bananin'
            animate='bananon'
            transition={{...transition, delay: 0.5}}
          >
            Respect.</motion.h1>
          <motion.h1 className='det' 
            variants={textReveal}
            initial='bananin'
            animate='bananon'
            transition={{...transition, delay: 0.7}}
            >
            Result.</motion.h1>
          <motion.p
            variants={textReveal}
            initial='bananin'
            animate='bananon'
            transition={{...transition, delay: 0.9}}
          >The best law practices & services for all your needs</motion.p>
          <Button title='Contact Us' />
        </div>
        <div className='home-img'>
          <p id='glass'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti asperiores quos quisquam!</p>
          <img src={LadyJustice} alt="ladyjudge" />
        </div>
        <div className='home-judge'>
          <img src={Judge} alt="judge" />
        </div>
      </section>
    </>
  )
}

export default Home