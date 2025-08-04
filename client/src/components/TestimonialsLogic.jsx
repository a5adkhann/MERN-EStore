import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';

const TestimonialsLogic = () => {
  const [testimonials, setTestimonials] = useState([]);
  return (
    <>
      <TestimonialsSection testimonials={testimonials} setTestimonials={setTestimonials} />
      <ContactSection setTestimonials={setTestimonials} testimonials={testimonials} />
    </>
  );
};

export default TestimonialsLogic;
