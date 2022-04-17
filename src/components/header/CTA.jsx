import React from 'react'
import Resume from '../../img/resume.png'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} className='btn' target="_blank">Resume</a>
        <a href="#contact" className='btn'>Let's Talk</a>
    </div>
  )
}

export default CTA