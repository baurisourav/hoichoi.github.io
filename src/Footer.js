import React from 'react'
import {FaYoutube,FaFacebook,FaInstagram,FaTwitter,FaLinkedin,FaApple,FaAndroid,} from 'react-icons/fa'
import {SiAmazonfiretv,SiSamsung,SiRoku} from 'react-icons/si'
export default function footer() {
  return (
    <>
   <div> <hr className='line'></hr></div>
  <div className='footer'>
  
    <div className='icons'>
             <h1 className='fo-logo'>ho!cho!</h1>
      <div className='social'>
             <div className='sociallinks'><a target="_blank" href='https://www.youtube.com'><FaYoutube /></a></div>
             <div className='sociallinks'><a target="_blank" href='https://www.facebook.com'><FaFacebook /></a></div>
             <div className='sociallinks'><a target="_blank" href='https://www.instagram.com'><FaInstagram /></a></div>
             <div className='sociallinks'><a target="_blank" href='https://www.twitter.com'><FaTwitter /></a></div>
             <div className='sociallinks' ><a target="_blank" href='https://www.linkedin.com'><FaLinkedin /></a></div>
      
      </div>
     
      
    </div>
     <div className='explore'>
        <h3>EXPLORE</h3>
        <p>Latest Shows<br/>Latest Movies<br/>Upcoming on hoichoi<br/>All Shows<br/>All Movies </p>
      </div>
      <div className='explore'>
        <h3>POPULAR SHOWS</h3>
        <p>The Bengal Scam: Bima Kando<br></br>Karagar
Rahasya Romancha Series<br></br>
Eken Babu<br></br>
Byomkesh  </p>
      </div>
      <div className='explore'>
        <h3>POPULAR MOVIES</h3>
        <p>Latest Shows<br/>Latest Movies<br/>Upcoming on hoichoi<br/>All Shows<br/>All Movies </p>
      </div>
       <div className='explore'>
        <h3>COMPANY </h3>
        <p>Latest Shows<br/>Latest Movies<br/>Upcoming on hoichoi<br/>All Shows<br/>All Movies </p>
      </div>

      
    </div>
    <div className='brands'>
      <div className='brand'> <FaApple/></div>
      <div className='brand'> <FaAndroid/></div>
      <div className='brand'><SiAmazonfiretv/></div>
      <div className='brand'><SiSamsung/></div>
      <div className='brand'><SiRoku/></div>
     
     
      
      
      
    </div>
   
    </>
  )
}
