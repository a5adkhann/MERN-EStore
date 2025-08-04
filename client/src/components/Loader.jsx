import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Loader = ({ onComplete }) => {
  useGSAP(() => {
    let tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete(); 
      }
    });

    tl.to(".box", {
      scale: 0,
      y: 60,
      rotate: 400,
      duration: 1,
      delay: 0.5,
    //   repeat: 1,
    //   yoyo: true,
      stagger: {
        amount: 1.5,
        from: "start",
      }
    });

    tl.to(".container", {
      rotate: "-405deg",
      scale: 0,
    //   duration: 1,
    });

    tl.to(".wrapper", {
      opacity: 0,
      display: "none"
    });

  }, []);

  return (
    <div className='wrapper bg-white h-screen absolute top-0 left-0 w-screen flex items-center justify-center z-50'>
      <div className="container rotate-45 w-24 grid grid-cols-3 gap-x-1 gap-y-1">
        {new Array(9).fill().map((_, index) => (
          <div key={index} className='box w-7 h-7 bg-gradient-to-br from-[#000000] to-[#060a49]'></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
