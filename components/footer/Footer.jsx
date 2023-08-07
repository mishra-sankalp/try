import React from 'react'
import './footer.css';
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">SANKALP</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/sankalp-mishra-827bb61bb/"><FaLinkedinIn/></a>
        <a href="https://www.facebook.com/"><FaFacebookF/></a>
        <a href="https://twitter.com/messages/compose"><BsTwitter/></a>
        <a href="https://www.instagram.com/direct/t/17844276845497320/"><BsInstagram/></a>

      </div>

      <div className="footer__copyright">
        <small>
        &copy; All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer