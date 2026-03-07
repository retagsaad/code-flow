import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between p-2'>
      <div>
        <img src="logo.png" alt="" className='w-40 ml-50'/>
      </div>
      <div className='pt-5 pr-40 text-gray-300'>
        <a className='m-5' href="#features">Features</a>
        <a className='m-5' href="#pricing">Pricing</a>
        <a className='m-5' href="#testimonials">Testimonials</a>

      </div>
    </div>
  )
}
