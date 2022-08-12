import React from 'react'
import './App.scss'
import Home from './Components/sections/Home'
import Navigation from './Components/Navigation'
import Experience from './Components/sections/Experience'
import Work from './Components/sections/Work'
import Offers from './Components/sections/Offers'
import Attorney from './Components/sections/Attorney'
import Consultation from './Components/sections/Consultation'
import Price from './Components/sections/Price'
import Review from './Components/sections/Review'
import Trust from './Components/sections/Trust'
import Request from './Components/sections/Request'
import Footer from './Components/sections/Footer'
import Loader from 'react-loaders'
import { AnimatePresence } from 'framer-motion'
// import Svg from './SubComponents/sections/Svg'


const App = () => {

  return (
    <>
    <AnimatePresence exitBeforeEnter>
      <div className="app" data-scroll-container>
          <Navigation  />
          <Home />
          <Experience />
          <Work />
          <Offers />
          <Attorney />
          <Consultation />
          <Price />
          <Review />
          <Trust />
          <Request />
          <Footer />
          <Loader type="pacman"/>
        </div>
    </AnimatePresence>
    </>
  )
}

export default App