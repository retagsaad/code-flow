import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between fixed  top-0 z-50 w-full p-2 from-[#010b38] via-[#031739f5] to-[#02114c]/80 backdrop-blur'>
      <div>
        <img src="logo.png" alt="" className='w-40 ml-50'/>
      </div>
      <div className='pt-5 pr-40 text-gray-300 sm:hidden md:block'>
        <a className='m-5' href="#features">Features</a>
        <a className='m-5' href="#pricing">Pricing</a>
        <a className='m-5' href="#testimonials">Testimonials</a>

      </div>
    </div>
  )
}
