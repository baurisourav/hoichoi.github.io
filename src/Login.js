import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
    <div className='loginDiv'>
      <h1>Login</h1>
      
      <form className='loginForm'>

<input className='input' placeholder='userName' ></input>
<input className='input' placeholder='password' ></input>
<button type="button">login</button>


</form>


    </div>
    </>
  )
}
