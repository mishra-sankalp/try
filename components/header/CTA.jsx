// CTA means CAll to action....we created this component for importing cv to our portfolio

import React from 'react'
import CV from '../../assets/cv.pdf';
const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn' style={{border:0}}>Download CV</a>
        {/* this #contact thing will take us to the contact section....# denotes id(unique) */}
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA