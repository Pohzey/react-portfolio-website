import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../img/me.jpg'
import HeaderSocial from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Anthony Cox</h1>
        <h5>Front-End Developer</h5>
        <CTA /> 
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header