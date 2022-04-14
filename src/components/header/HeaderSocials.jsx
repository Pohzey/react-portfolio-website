import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://linkedin.com" target="_blank"><FaGithub/></a>
        <a href="https://linkedin.com" target="_blank"><SiGmail/></a>
    </div>
  )
}

export default HeaderSocials