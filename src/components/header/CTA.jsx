import React from 'react'
import Resume from '../../img/resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Resume</a>
        <a href="#contact" className='btn btn-primary'>Get in Touch</a>
    </div>
  )
}

export default CTA