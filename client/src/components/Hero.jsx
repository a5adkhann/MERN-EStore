import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Video Background */}
      <video
        className="w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-20 text-white text-center">
        <p className="text-2xl md:text-4xl font-bold">Collection 2025</p>
        <p className="text-xl md:text-3xl font-bold">Fresh Drops. Timeless Vibes.</p>
      </div>
    </div>
  );
};

export default Hero;
