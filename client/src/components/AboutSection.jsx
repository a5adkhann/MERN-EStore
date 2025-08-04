import React from 'react'

const AboutSection = () => {
    return (
        <>
            <div className='px-10' data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease-in-out">
                <p className='font-bold text-3xl mb-6 text-center'>About Us</p>
            </div>
            <div className="about-section grid md:grid-cols-2 grid-cols-1 place-items-center gap-10 px-10 pb-20" data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out">
                <div className="about-video">
                    <video src="./about.mp4" autoPlay muted loop></video>
                </div>
                <div className="about-text">
                    Welcome to CozaStore, your go-to destination for all things fashion, style, and lifestyle! We are passionate about offering high-quality products that elevate your everyday life and bring a touch of charm to your wardrobe.

                    At CozaStore, we believe shopping should be more than just a transaction – it should be an experience. That's why we've curated a diverse collection of trendy clothing, accessories, and lifestyle products, all designed to help you express your unique personality and stay ahead of the trends.
                </div>
            </div>
        </>
    )
}

export default AboutSection
