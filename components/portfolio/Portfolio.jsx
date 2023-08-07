import React from 'react';
import './portfolio.css';
import img1 from '../../assets/portfolio.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
const Portfolio = () => {
  return(
    <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
    <article className='portfolio__item'>
      <div className="post-card">
        <div className="post-card-inner">
          <div className="post-card-front">
          <div className="img">
            <img src={img1} alt="" className='image'/>
          </div>
          <h3 className='postCard'>Portfolio</h3>
          </div>
          <div className="post-card-back">
          <div className="back">
          <p className='name'>A fully responsive personal portfolio that features some of my GitHub projects as well as my resume and technical
                skills. Technologies used are ReactJs and CSS3.Added multiple contact options on my website.</p>
          <div className="portfolio__cta">
          <a href="https://github.com/mishra-sankalp/my_portfolio" className="github btn" target='_blank' style={{border:0}}>GitHub</a>
          <a href="https://64d078ea739d942f01d1d303--vermillion-lebkuchen-130fc7.netlify.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
          </div>
          </div>
        </div>
      </div>
      </article>

      {/* 2nd project */}
      <article className='portfolio__item'>
      <div className="post-card">
        <div className="post-card-inner">
          <div className="post-card-front">
          <div className="img">
            <img src={img2} alt="" className='image'/>
          </div>
          <h3 className='postCard'>Drum-Kit</h3>
          </div>
          <div className="post-card-back">
          <div className="back">
          <p className='name'>A virtual drum set is created that can be played on a web browser.The HTML was used to create the layout , the
CSS was used to style , and the JavaScript was used to make the drum kit interactive.</p>
          <div className="portfolio__cta">
          <a href="https://github.com/mishra-sankalp/drum" className="github btn" style={{border:0}} target='_blank'>GitHub</a>
          <a href="https://mishra-sankalp.github.io/drum/" target='_blank' className="btn btn-primary">Live Demo</a>
          </div>
          </div>
          </div>
        </div>
      </div>
      </article>

      {/* 3rd Project */}
      
      <article className='portfolio__item'>
      <div className="post-card">
        <div className="post-card-inner">
          <div className="post-card-front">
          <div className='img'>
            <img src={img3} alt="" className="image" />
          </div>
          <h3 className='postCard'>Dice Game</h3>
          </div>
          <div className="post-card-back">
          <div className="back">
          <p className='name'>These games involve rolling dice(using js) and using the results to determine outcomes.It is a mind refreshing children
game. It can be used for toss or for decision of winner between two parties</p>
          <div className="portfolio__cta">
          <a href="https://github.com/mishra-sankalp/dice_game" className="github btn" style={{border:0}} target='_blank'>GitHub</a>
          <a href="https://mishra-sankalp.github.io/dice_game/" target='_blank' className="btn btn-primary">Live Demo</a>
          </div>
          </div>
          </div>
        </div>
      </div>
      </article>

      {/* 4th project */}
      <article className='portfolio__item'>
      <div className="post-card">
        <div className="post-card-inner">
          <div className="post-card-front">
          <div className="img">
            <img src={img4} alt="" className='image'/>
          </div>
          <h3 className='postCard'>Simon Game</h3>
          </div>
          <div className="post-card-back">
          <div className="back">
          <p className='name'>It is a game to improve short-term memory,creates a series of tones and lights and requires a user to repeat the
sequence. It is simple yet challenging gameplay, combined with its iconic design and nostalgic appeal.</p>
          <div className="portfolio__cta">
          <a href="https://github.com/mishra-sankalp/simon_game" className="github btn" style={{border:0}} target='_blank'>GitHub</a>
          <a href="https://mishra-sankalp.github.io/simon_game/" target='_blank' className="btn btn-primary">Live Demo</a>
          </div>
          </div>
          </div>
        </div>
      </div>
      </article>

      {/* 5th Project */}
      
      <article className='portfolio__item'>
      <div className="post-card">
        <div className="post-card-inner">
          <div className="post-card-front">
          <div className='img'>
            <img src={img5} alt="" className="image" />
          </div>
          <h3 className='postCard'>Netflix</h3>
          </div>
          <div className="post-card-back">
          <div className="back">
          <p className='name'>A sample Netflix app to demonstrate the basic principles of props.</p>
          <div className="portfolio__cta">
          <a href="https://github.com/mishra-sankalp/netflix" className="github btn" style={{border:0}} target='_blank'>GitHub</a>
          <a href="https://64d0149017e8c4059648a1a1--capable-mooncake-05f547.netlify.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
          </div>
          </div>
        </div>
      </div>
      </article>

    </div>
  </section>
  );
}

export default Portfolio;