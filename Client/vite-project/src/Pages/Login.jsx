import React from 'react'
import { useState } from 'react'
import axios from 'axios'
export default function Login() {
    const [data,setData]=useState({
        email:"",
        password:""
    });
    const LoginUser = async (e) => { // Add async keyword here
      e.preventDefault();
      try {
          const response = await axios.post('/login', data);
          console.log("submitted successfully", response.data);
          // Handle successful login, such as redirecting the user
      } catch (error) {
          console.error("Error submitting login:", error);
          // Handle error, such as displaying an error message to the user
      }
  };
  

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={LoginUser}>
            <label htmlFor="">Email:</label>
            <input type="email" placeholder='Enter your email' value={data.email} onChange={(e)=>setData({...data, email:e.target.value})}/>
            <label htmlFor="">Password:</label>
            <input type="password" placeholder='Enter your password' value={data.password} onChange={(e)=>setData({...data, password:e.target.value})}/>
            <button type='submit'>Login</button>
            </form>
    </div>
  )
}
