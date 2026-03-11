import React from 'react'
import Box from './Box'
export default function Home() {
  return (
    <div className='flex max-w-300 mx-auto px-5 mt-6 justify-between'>
      <div className='py-5 m-5 sm:left-10'>
        <div className='bg-slate-900 w-48 p-1.5 rounded-full text-sm text-gray-400 mb-3'>
          <button>Introducing CodeFlow AI 2.0</button>
        </div>
        <h5 className='text-white font-bold text-5xl leading-snug'>Code Faster <br /> <span className='text-blue-400'>Build Better</span><br /> With CodeFlow AI</h5>
        <p className='w-120 text-sm text-gray-500 py-5'>Accelerate your development workflow with intelligent code completion automated testing, and smart debugging. Ship production-ready code 10x faster.</p>
        <div className='py-5 group-hover:bg-white/20 flex'>
          <button  className='flex bg-blue-500 p-3 mr-7 rounded-xl mt-2 cursor-pointer'><a href="#" className='mr-3'>Start Coding Free</a><img src="arrow.png" alt="" className='cursor-pointer w-5 h-4 mt-1.5'/></button>
          <button className='flex rounded-xl bg-gray-900 p-2 cursor-pointer'><img src="play_icon.png" alt="" className='w-10 h-10 cursor-pointer'/><a href="#" className='mt-2'>Watch Demo</a></button>
        </div>
      </div>
      <div>
        <Box/>
      </div>
    </div>
  )
}
