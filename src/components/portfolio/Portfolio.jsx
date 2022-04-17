import React from 'react'
import './portfolio.css'
import IMG1 from '../../img/portfolio1.jpg'
import IMG2 from '../../img/portfolio2.png'
import IMG3 from '../../img/portfolio3.png'
import IMG5 from '../../img/portfolio5.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>View My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>KING OF SPACE: RECONSTRUCTION OF A NARRATIVE GAME</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/CullenThomas/KingofSpace" target="_blank" className='btn'>GitHub</a>
          <a href="https://github.com" target="_blank" className='btn'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>REACT PORTFOLIO WEBSITE</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Pohzey/react-portfolio-website" target="_blank" className='btn'>GitHub</a>
          <a href="https://github.com" target="_blank" className='btn'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>A JOURNEY THROUGH THE SOLAR SYSTEM</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Pohzey/Solar-System-Skrollr" target="_blank" className='btn'>GitHub</a>
          <a href="https://dtc-wsuv.org/acox21/narrative/" target="_blank" className='btn'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>POINT LOCATOR USING MAPBOX API</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Pohzey/Mapbox-Yellowstone-GPS" target="_blank" className='btn'>GitHub</a>
          <a href="https://dtc-wsuv.org/acox21/mapproject/" target="_blank" className='btn'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio