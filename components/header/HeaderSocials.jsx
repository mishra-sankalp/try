import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
const HeaderSocials = () => {
  return (
    <div className="header__socials">

       {/* linkedin profile */}
        <a href="https://www.linkedin.com/in/sankalp-mishra-827bb61bb/" target='blank'><BsLinkedin/></a>

        {/* github profile */}
        <a href="https://github.com/mishra-sankalp" target='blank'><FaGithub/></a>

        {/* twitter profile */}
        <a href="https://twitter.com/home" target='blank'><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials