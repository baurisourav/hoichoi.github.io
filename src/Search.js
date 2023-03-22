import React, { useEffect, useState } from 'react'
import data from './data'

export default function Search() {
  const [userInput,setInput]=useState("")

 function item(val){
    return (
      <> 
      <div> <img src={val.link}/>
      <p>{val.name}</p></div>
     
      
      </>
     
    )
    
 }
  

  
  return (
    <div className='searchDiv'>
      <form className='form'>
        <input className='searchbar' placeholder='Search here...' value={userInput} onChange={(e)=>{
          setInput(e.target.value)
        }} ></input>
      </form>
      {}
      
      <div className='searchpostre'>{userInput&&data["Trending"].filter(x=>x.name.toLowerCase().includes(userInput)).map((item))}</div>
    
    </div>
  )
}


