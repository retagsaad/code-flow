import React from 'react'
import Box from './Box'
export default function Home() {
  return (
    <div className='flex max-w-300 mx-auto px-5'>
      <div className='py-5 m-5'>
        <div className='bg-slate-900 w-48 p-1.5 rounded-full text-sm text-gray-400 m-3'>
          <button>Introducing CodeFlow AI 2.0</button>
        </div>
        <h5 className='text-white font-bold w-90 text-5xl'>Code Faster <span className='text-blue-400'>Build Better</span> With CodeFlow AI</h5>
        <p className='w-120 text-sm text-gray-400 py-5'>Accelerate your development workflow with intelligent code completion automated testing, and smart debugging. Ship production-ready code 10x faster.</p>
        <div className='py-5'>
          <button><a href="#">Start Coding Free</a><img src="arrow.png" alt="" /></button>
          <button><a href="#">Watch Demo</a></button>
        </div>
      </div>
      <div>
        <Box/>
      </div>
    </div>
  )
}
