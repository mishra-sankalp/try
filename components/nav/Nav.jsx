import React, { useState } from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {VscFolderLibrary} from 'react-icons/vsc';
// import {RiGraduationCapLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
const Nav = () => {
  const state=useState;
  const[initial,setFinal]=useState('#');
  return (
    <nav>
      <a href="#"  onClick={()=>{
        setFinal('#')
      }} className={initial==='#' ? 'active' : ''} >
      <AiOutlineHome/>
      </a>

      <a href="#about" onClick={()=>{
        setFinal('#about')
      }}className={initial==='#about'?'active':''}>
      <AiOutlineUser/>
      </a>

      <a href="#experience"  onClick={()=>{
        setFinal('experience')
      }} className={initial==='experience'?'active':''} ><BiBook/></a>
      
      <a href="#portfolio"  onClick={()=>{
        setFinal('portfolio')
      }} className={initial==='portfolio'?'active':''} ><VscFolderLibrary/></a>

      <a href="#contact"  onClick={()=>{
        setFinal('contact')
      }} className={initial==='contact'?'active':""} ><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav