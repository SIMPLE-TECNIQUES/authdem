import React from 'react'
import { useState } from 'react';
export default function Register() {
    const [data, setData]=useState(
        {  name:" ",
           email:" ",
           password:" ",
        }
    )
    const RegisterUser=(e)=>{
        e.preventDefault();
    }
  return (
    <div>
         <h3>Register</h3>
      <form  onSubmit={RegisterUser}>
          <label htmlFor="">Name</label>
          <input type="text" placeholder='Enter your name' value={data.name} onChange={(e)=>setData({...data, name:e.target.value})} />
          <label htmlFor="">email</label>
          <input type="email" placeholder='Enter your email' value={data.email} onChange={(e)=>setData({...data, email:e.target.value})} />
          <label htmlFor="">Password</label>
          <input type="password" placeholder='Enter your password' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} /> 
          <button type='submit'>submit</button>
      </form>
    </div>
  )
}
