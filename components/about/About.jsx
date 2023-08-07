//rafce- is the emmet abbreviation for react arrow function export component.....
//arrow function in the full form tells us taht it will make use of fat arrow function

import React from 'react'
import './about.css';
import Me from '../../assets/me-about1.png';
import {SiLeetcode} from 'react-icons/si';
import {SiGeeksforgeeks} from 'react-icons/si';
import {VscFolderLibrary} from 'react-icons/vsc';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

          {/* leetcode */}
          <a href="https://leetcode.com/_Iron_man/" className='about__a' target='_blank'>
            <article className="about__card">
              <SiGeeksforgeeks className='about__icon'/>
              <h5>LeetCode</h5>
              <small>250+ Solved</small>
            </article>
          </a>
            {/* gfg */}
          <a href="https://auth.geeksforgeeks.org/user/sankalp22int" className='about__a' target='_blank'>
            <article className="about__card">
              <SiLeetcode className='about__icon'/>
              <h5>GFG</h5>
              <small>300+ Solved</small>
            </article>
          </a>
          <a href="https://github.com/mishra-sankalp?tab=repositories" className='about__a' target='_blank'>
            <article className="about__card">
             <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </a>
          </div>
          <p>  B.tech Final Year Information Technology student in HBTU Kanpur.
          Computer geek having a keen interest in Problem Solving, Data Structure and Algorithm.
          Proficient in programming languages such as Java and C++.
          Frontend Web Developer having slight knowledge of Backend technologies.
          </p>
          <p>
            I am open to talk regarding Internships and full-time opportunities.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About