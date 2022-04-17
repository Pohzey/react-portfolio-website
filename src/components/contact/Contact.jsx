import React from 'react'
import './contact.css'
import {SiGmail} from 'react-icons/si'

const contact = () => {
  return (
    <section id="contact">
      <h5>Let's Connect</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
              <SiGmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>agcoxweb@gmail.com</h5>
            <a href="mailto:agcoxweb@gmail.com" target="_blank">Send message</a>
          </article>

          {/*<article className="contact__option">
              <SiGmail />
            <h4>Email</h4>
            <h5>agcoxweb@gmail.com</h5>
            <a href="mailto:agcoxweb@gmail.com">Send message</a>
          </article>

          <article className="contact__option">
              <SiGmail />
            <h4>Email</h4>
            <h5>agcoxweb@gmail.com</h5>
            <a href="mailto:agcoxweb@gmail.com">Send message</a>
  </article>*/}
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact