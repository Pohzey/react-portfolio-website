import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/anthony-cox-389b36235/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Pohzey" target="_blank"><FaGithub/></a>
        <a href="#contact" target="_blank"><SiGmail/></a>
    </div>
  )
}

export default HeaderSocials