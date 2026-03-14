import React from 'react'
import PricingBox from './PricingBox'
export default function Pricing() {
  return (
    <div id='pricing' className='mt-20'>
      <div>
        <h1 className='text-white font-bold text-5xl leading-snug text-center'>Simple,Transparentb <br /><span className='text-blue-400 text-center flex justify-center'>Pricing Plans</span></h1>
         <p className=' text-md text-gray-500  text-center flex justify-center items-center mt-5'>Choose the perfect plan for your needs. All plans include a 14-day free trial.</p>
      </div>
      <PricingBox/>
    </div>
  )
}
