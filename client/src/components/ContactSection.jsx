import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const ContactSection = ({testimonials, setTestimonials}) => {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleFeedback = async(e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:2000/feedback", { name, message });
            console.log(response.data.message);
            toast.success(response.data.message);
            setName("");
            setMessage("");
            setTestimonials([newTestimonial, ...testimonials]);
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <>
        <div className="contact-section border my-20 border-gray-300 md:mx-60 sm:mx-72 mx-4" data-aos="flip-up" data-aos-delay="200" data-aos-easing="ease-in-out">
            <form className='md:px-20 px-5 py-20' onSubmit={handleFeedback}>
                <p className='font-bold text-center text-3xl mb-10'>Send Us A Message</p>
                <input type="text" className='w-[100%] border focus:outline-none focus:border-slate-900 border-gray-300 mb-6 p-2' placeholder='Your Email Address' value={name} onChange={(e) => setName(e.target.value)} required/>

                <textarea className='w-[100%] mb-4 resize-none h-44 border focus:outline-none focus:border-slate-900 border-gray-300 p-2' placeholder='Your Message Here' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

                <button className='w-[100%] bg-gradient-to-br from-[#000000] to-[#060a49] text-white py-2 rounded-full'>SUBMIT</button>
            </form>
        </div>

        <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </>
  )
}

export default ContactSection
