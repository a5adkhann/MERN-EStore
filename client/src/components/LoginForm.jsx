import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BG from './BG'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

const LoginForm = ({loginUser}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:2000/auth/login", {
        email, password
      });
      console.log(response);
      toast.success(response.data.message);
      loginUser(response.data.registeredUser);
      navigate("/dashboard");
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <BG />
      <div className='login-form md:w-[30%] w-[90%] border border-gray-300 shadow-md mx-auto mt-[10%] p-10 bg-white'>
        <h1 className='font-bold uppercase text-2xl text-center mb-3 underline underline-offset-8 underline-red'>Login</h1>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder='Email Address' className='w-[100%] border-gray-300 border p-2 mb-4 focus:outline-0 focus:border-blue-300' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Password' className='w-[100%] border-gray-300 border p-2 mb-4 focus:outline-0 focus:border-blue-300' value={password} onChange={(e) => setPassword(e.target.value)} />

          <p className='text-sm mb-4 text-center'>Don't have an Account? <Link className='text-blue-600' to="/register">Register</Link></p>

          <button className='w-[100%] border border-gray-300 hover:bg-black hover:text-white py-2 transition-all ease-in-out duration-300 uppercase'>Login</button>
        </form>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default LoginForm
