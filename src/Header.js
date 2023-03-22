import { Link } from "react-router-dom";
import {FaGlobe} from "react-icons/fa";
import {IoMdArrowDropdown,IoMdArrowDropup} from "react-icons/io";
import { useState,useEffect } from "react";
import "./app.css"
import {FaSistrix} from 'react-icons/fa'

import React from 'react'

export default function Header() {
  const [buttons,setbutton]=useState(0)
  const [languag,setLanguage]=useState('ENG')
  const [HOME,setHome]=useState('HOME')
  const [FREE,setFREE]=useState('FREE')
  const [MOVIES,setMOVIES]=useState('MOVIES')
  const [SHOWS,setSHOWS]=useState('SHOWS')
  const [UPCOMING,setUPCOMING]=useState('UPCOMING')
  const [GIFT,setGIFT]=useState('GIFT')
  const [OFFERS,setOFFERS]=useState('OFFER')
  const [LOGIN,setLOGIN]=useState('LOGIN')
  const [SIGNUP,setSignUp]=useState('SIGNUP')
  const [SUBSCRIBE,setSUBSCRIBE]=useState('SUBSCRIBE')
  const language={
  
    cursor:"pointer",
    width:"40px",
    height:"40px",
    color:"red",
   
    
  }
  useEffect(()=>
  {
    languag=='BNG'?setHome('হোম'):setHome('HOME')
    languag=='BNG'?setFREE('ফ্রি'):setFREE('FREE')
    languag=='BNG'?setMOVIES('মুভিস'):setMOVIES('MOVIES')
    languag=='BNG'?setUPCOMING('আপকামিং'):setUPCOMING('UPCOMING')
    languag=='BNG'?setGIFT('গিফট'):setGIFT('GIFT')
    languag=='BNG'?setOFFERS('অফারস'):setOFFERS('OFFERS')
    languag=='BNG'?setLOGIN('লগইন'):setLOGIN('LOGIN')
    languag=='BNG'?setSignUp('সাইনআপ '):setSignUp('SIGNUP')
    languag=='BNG'?setSHOWS('সিরিজ'):setSHOWS('SHOWS')
    languag=='BNG'?setSUBSCRIBE('সাবস্ক্রাইব'):setSUBSCRIBE('SUBSCRIBE')
  })
 
  return (
    <nav className="header">
    <h1>
        ho!cho!
    </h1>
    
    <main className="main">
        <Link className="head" to={"/"}>{HOME} </Link>
        <Link className="head" to={"/free"}>{FREE}</Link>
        <Link className="head" to={"/MOVIES"}>{MOVIES}</Link>
        <Link className="head" to={"/Shows"}>{SHOWS}</Link>
        <Link className="head" to={"/upcoming"}>{UPCOMING}</Link>
        <Link className="head" to={"/gift"}>{GIFT}</Link>
        <Link className="head" to={"/offers"}>{OFFERS}</Link>
        <Link className="head" to={"/search"}><div className="search"><FaSistrix/></div></Link>
        
        <>
        <div>  
        
          <a className="button" onClick={()=>{buttons==0?setbutton(1):setbutton(0)}}>
        <FaGlobe size="1.5rem"/>
        {
          buttons==0?<IoMdArrowDropdown size="1.5rem"/>:<IoMdArrowDropup size="1.5rem"/>
          
        }
               </a>
                  {buttons==1 &&<div style={language}>
                  <h4 onClick={()=>{setLanguage("ENG")}}>English</h4>
                    <h4 onClick={()=>{setLanguage("BNG")}}>Bengali</h4>
        </div>}
       
        
        </div>
        <Link className="head" to={"/login"}> {LOGIN} </Link>
        <Link className="head" to={'/signUp'}>{SIGNUP}</Link>
        <div className="btn">{SUBSCRIBE}</div>
        </>
    </main>
</nav>
  )
}







