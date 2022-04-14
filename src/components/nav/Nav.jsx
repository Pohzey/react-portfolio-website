import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBrain} from 'react-icons/bi'
import {GoBook} from 'react-icons/go'
import {BiMessageSquareDetail} from 'react-icons/bi'

const nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBrain/></a>
      <a href="#portfolio"><GoBook/></a>
      <a href="#contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default nav