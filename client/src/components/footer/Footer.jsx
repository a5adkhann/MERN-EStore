import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='bg-gradient-to-br from-[#000000] to-[#060a49] grid grid-cols-4 place-items-center py-10 text-white gap-10'>
            <div>
              <p className='uppercase font-semibold text-xl mb-6'>Categories</p>
              <p>Women</p>
              <p>Men</p>
              <p>Shoes</p>
              <p>Watches</p>
            </div>
            <div>
                <p className='uppercase font-semibold text-xl mb-6'>Help</p>
                <p>Track Order</p>
                <p>Returns</p>
                <p>Shipping</p>
                <p>FAQs</p>
            </div>
            <div>
              <p className='uppercase font-semibold text-xl mb-2'>GET IN TOUCH</p>
              <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
            </div>
            <div>
              <p className='uppercase font-semibold text-xl mb-1'>Newsletter</p>

              <form className='mb-10'>
                <input type="text" placeholder='asad@gmail.com' className='border-b-1 w-[90%]' />

                <button className='bg-purple-300 mt-2 w-[90%] focus:outline-none rounded-full py-1 text-white font-bold'>Subscribe</button>
              </form>
            </div>
        </footer>
    </>
  )
}

export default Footer
