import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import BG from './BG'
import axios from 'axios'

const RegisterForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleRegisteration = async(e) => {
    e.preventDefault();
    try {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);

    if(fileInputRef.current){
      fileInputRef.current.value = "";
    }
    const response = await axios.post("http://localhost:2000/auth", formData);
    console.log(response)
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <>
      <BG />
        <div className='registeration-form md:w-[30%] w-[90%] border border-gray-300 shadow-xl mx-auto mt-[10%] p-10 bg-white'>
          <h1 className='font-bold uppercase text-2xl text-center mb-3 underline underline-offset-8'>Register</h1>
          <form onSubmit={handleRegisteration} encType='multipart/form-data'>
            <input type="text" placeholder='Full Name' className='w-[100%] border-gray-300 border p-2 mb-4 focus:outline-0 focus:border-blue-300'
            value={name}
            onChange={(e) => setName(e.target.value)} 
            />
            <input type="email" placeholder='Email Address' className='w-[100%] border-gray-300 border p-2 mb-4 focus:outline-0 focus:border-blue-300' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" placeholder='Password' className='w-[100%] border-gray-300 border p-2 mb-4 focus:outline-0 focus:border-blue-300' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <input type="file" className='w-[100%] border-gray-300 border p-2 mb-2 focus:outline-0 focus:border-blue-300' 
            onChange={(e) => setImage(e.target.files[0])}
            />

            <p className='text-sm mb-4 text-center'>Already have an Account? <Link className='text-blue-600' to="/login">Login</Link></p>

            <button className='w-[100%] border border-gray-300 hover:bg-black hover:text-white py-2 transition-all ease-in-out duration-300 uppercase'>Create Account</button>
          </form>
        </div>

      </>
      )
}

      export default RegisterForm
