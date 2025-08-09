import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-br from-[#000000] to-[#060a49] grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 place-items-center py-10 text-white gap-10 md:px-0 px-10">
        <div className="flex flex-col justify-start">
          <p className="uppercase font-semibold text-xl mb-6">Categories</p>
          <p>Women</p>
          <p>Men</p>
          <p>Shoes</p>
          <p>Watches</p>
        </div>

        <div className="flex flex-col justify-start">
          <p className="uppercase font-semibold text-xl mb-6">Help</p>
          <p>Track Order</p>
          <p>Returns</p>
          <p>Shipping</p>
          <p>FAQs</p>
        </div>

        <div className="flex flex-col justify-start">
          <p className="uppercase font-semibold text-xl mb-6">Get In Touch</p>
          <p>
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
          </p>
        </div>

        <div className="flex flex-col justify-start">
          <p className="uppercase font-semibold text-xl mb-6">Newsletter</p>
          <form className="flex flex-col items-start mb-10">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="border-b-2 w-full mb-4 py-1 px-2 bg-transparent text-white"
            />
            <button className="bg-purple-300 w-full focus:outline-none rounded-full py-2 text-white font-bold">
              Subscribe
            </button>
          </form>
        </div>
      </footer>

    </>
  )
}

export default Footer
