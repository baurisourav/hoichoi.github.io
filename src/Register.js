import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <>
    <div className='loginDiv'>
      <h1>Register</h1>
      
      <form className='loginForm'>

<input className='input' placeholder='name' ></input>
<input className='input' placeholder='password' ></input>
<button type="button">Signup</button>


</form>


    </div>
    </>
  )
}