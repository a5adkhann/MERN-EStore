import axios from 'axios';
import { CircleUserRound } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const TestimonialsSection = ({testimonials, setTestimonials}) => {

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get("http://localhost:2000/feedback");
      setTestimonials(response.data.testimonials);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchTestimonials();
  }, [testimonials])
  return (
    <>
      <div className='px-10'>
        <p className='font-bold text-3xl mb-6 text-center'>Testimonials</p>
      </div>
      <div className="testimonials-section grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 px-10">

        {testimonials.map((testimonial) => (
          <div className="testimonial relative border-2 shadow-md border-slate-600 h-60 text-white bg-gradient-to-br from-[#000000] to-[#060a49] p-3" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-in-out">
            <p>{testimonial.message}</p>
            
            <div className='flex items-center gap-2 mt-4 absolute bottom-5'>
            <span className=' rounded-full'>
              <CircleUserRound />
            </span>
            <p>{testimonial.name}</p>
            </div>
          </div>
        ))}

      </div>
    </>
  )
}

export default TestimonialsSection
