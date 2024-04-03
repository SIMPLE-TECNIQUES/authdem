import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from '../src/Components/Navbar'
import Home from '../src/Pages/Home'
import Register from '../src/Pages/Register'
import Login from '../src/Pages/Login'
import axios from 'axios'

axios.defaults.baseURL='http://localhost:8000'
axios.defaults.withCredentials=true

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
       </div>
    </>
  )
}

export default App
