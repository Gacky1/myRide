// import React from 'react'

import { useState } from "react"
import { Link } from "react-router-dom"

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})


  const handleSubmit = (e) => {
    e.preventDefault()
    // You would send this data to your server for authentication
    setUserData({email:email, password:password})
    // Clear the form fields after successful login
    setEmail('')
    setPassword('')
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
      <img className="w-16 mb-10" src="/assets/RaahiLogo.png" alt="" />
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }}>
        <h3 className="text-lg font-medium mb-2">What's your email?</h3>
        <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
        className="bg-[#eeeeee] mb-7  rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        placeholder="email@example.com"
        />
        <h3 className="text-lg font-medium mb-2">And your password?</h3>
        <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-[#eeeeee] mb-7  rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        required 
        placeholder="password" 
        />
        <button
        className="bg-[#111] text-white font-semibold mb-3  rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >Login</button>
      </form>
      <p className="text-center">Do not have an account? <Link to="/Signup" className="text-blue-600">Sign up!</Link></p>
      </div>

      <div>
        <Link to="/captain-login" 
        className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin