import React from 'react'
import './about.css'
import ME from '../../img/about-ME.JPEG'
import {BiBrain} from 'react-icons/bi'
import {GoBook} from 'react-icons/go'
import {BiMessageSquareDetail} from 'react-icons/bi'

const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiBrain className='about__icon' />
              <h5>Skills</h5>
              <small>What I Can Do</small>
            </article>

            <article className="about__card">
              <GoBook className='about__icon' />
              <h5>Portfolio</h5>
              <small>6+ Projects Completed</small>
            </article>
          </div>

          <p>I am a Front-End Web Developer with experience in Multimedia Design. A passion for technology and a desire to create cool things on the web. Motivated, driven, eager to learn and adapt to new experiences. I am always looking to expand my capabilities within the digital world in creating engaging experiences, helping people tap into the evolving world of the internet, and pushing the edge of web design forward. My resume is accessible through the button at the top of the page.


          </p>

          <a href="#contact" className='btn'>Lets Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default about