import React from 'react'
import { Link } from 'react-router-dom'
import BG from './BG'

const LoginForm = () => {
  return (
    <>
        <BG/>
        <div className='login-form w-[30%] border border-gray-300 shadow-md mx-auto mt-[10%] p-10 bg-white'>
          <h1 className='font-bold uppercase text-2xl text-center mb-3 underline underline-offset-8 underline-red'>Login</h1>
          <form>
              <input type="email" placeholder='Email Address' className='w-[100%] border-gray-300 border p-2 mb-4 focus:outline-0 focus:border-blue-300'/>
              <input type="password" placeholder='Password' className='w-[100%] border-gray-300 border p-2 mb-4 focus:outline-0 focus:border-blue-300'/>

              <p className='text-sm mb-4 text-center'>Don't have an Account? <Link className='text-blue-600' to="/register">Register</Link></p>

              <button className='w-[100%] border border-gray-300 hover:bg-black hover:text-white py-2 transition-all ease-in-out duration-300 uppercase'>Login</button>
          </form>
        </div>
    </>
  )
}

export default LoginForm
