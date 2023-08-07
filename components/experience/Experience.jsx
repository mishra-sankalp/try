import React from 'react'
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';
const Experience = () => {
  return (
   <section id="experience">
    <h5>What skills I Have</h5>
    <h2>My experience</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
      <h3>Languages</h3>
      <div className="experience__content">
      <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Java</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>C/C++</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Python</h4>
          <small className='text-light'>Basic</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
          </div>
        </article>
        
      </div>
      </div>
{/* END OF LANGUAGES */}

      <div className="experience__frameworks">
      <h3>Frameworks & Tools</h3>
      <div className="experience__content">
      <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>React Js</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Node Js</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>
      <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Bootstrap</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>JQuery</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
             <h4>Express Js</h4>
          <small className='text-light'>Basic</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
             <h4>Git/GitHub</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>
      </div>
      </div> 
      {/* END OF FRAMEWORKS */}

      </div>
   </section>
  )
}

export default Experience