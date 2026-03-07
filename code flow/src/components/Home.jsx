import React from 'react'
import Box from './Box'
export default function Home() {
  return (
    <div>
      <div>
        <div>
          <button>Introducing CodeFlow AI 2.0</button>
        </div>
        <h1>Code Faster Build Better With CodeFlow AI</h1>
        <p>Accelerate your development workflow with intelligent code completion automated testing, and smart debugging. Ship production-ready code 10x faster.</p>
        <div>
          <button><a href="#">Start Coding Free</a><img src="arrow.jpg" alt="" /></button>
          <button><a href="#">Watch Demo</a></button>
        </div>
      </div>
      <div>
        <Box/>
      </div>
    </div>
  )
}
