import React from 'react'
import {useState} from 'react'
import { RxChevronRight,RxChevronLeft } from "react-icons/rx";


export default function BannerImage({arr}) {
    const [currIndex,setIndex]=useState(0)
   const bannerimg={
    
    width:"95%",
    height:"100%",
    backgroundImage:`url(${arr[currIndex].link})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    scrollbehavior:"smooth",
 
   
   
    
   }
   const outerBanner={
    margin:"8rem",
    height:"20rem",
    width:"87%",
 "object-fit":"cover",


 
   }
   const leftArrow={
    color:"red",
    position:"absolute",
    left:"50px",
    top:"45%",
    fontSize:"40px",
    cursor:"pointer",
    zIndex:"1",

    transform: "scale(1.8)"
   }
   const righttArrow={
    color:"red",
    position:"absolute",
    top:"45%",
    fontSize:"40px",
    cursor:"pointer",
    right:"20px",
    zIndex:"1",
    
    transform: "scale(1.8)"
   }
   const dot={
    color: "white"
   }
  return (
  <>
    <div style={outerBanner}>
        <div style={leftArrow} onClick={()=>{const isfirst=currIndex==0;isfirst?setIndex(arr.length-1):setIndex(currIndex-1)}}>{<RxChevronLeft/>}</div>
        <div style={righttArrow} onClick={()=>{const lastIndex=currIndex==arr.length-1;lastIndex?setIndex(0):setIndex(currIndex+1)}}>{<RxChevronRight/>}</div>
    <div style={bannerimg}></div>
   
    </div>
  </>
    
  )
}
