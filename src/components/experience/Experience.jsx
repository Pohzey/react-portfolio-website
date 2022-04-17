import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What I Can Do</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Technical Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon' />
              <div><h4>JavaScript</h4></div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon' />
              <div><h4>HTML5</h4></div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon' />
              <div><h4>CSS3</h4></div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon' />
              <div><h4>jQuery</h4></div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon' />
              <div><h4>React</h4></div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon' />
              <div><h4>NodeJS</h4></div>
            </article>
          </div>
        </div>

        <div className="experience__softskills">
        <h3>Soft Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon' />
              <div><h4>Node JS</h4></div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon' />
              <div><h4>Figma</h4></div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon' />
              <div><h4>Adobe XD</h4></div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon' />
              <div><h4>GitHub</h4></div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon' />
              <div><h4>Adobe Suite</h4></div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon' />
              <div><h4>Wordpress</h4></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience