import React from 'react'

export default function Box() {
  return (
    <div className='bg-gray-900  p-5 rounded-xl w-xl h-full'>
      <div className='bg-mist-900 rounded-xl  w-full h-full'>
        <div className='flex justify-between bg-mist-800 p-2 rounded-t-xl'>
          <div className='flex gap-5 ml-3'>
          <img src="lights.png" alt="" className='w-12 h-10'/>
          <p className='mt-1.5'>CodeFlow AI</p>
          </div>
          <div className='flex mt-1.5 gap-3 mr-3'>
            <p className='w-6 h-7 bg-blue-700 items-center rounded-lg flex justify-center'>AI</p>
            <p>React App</p>
            <button>^</button>
          </div>
        </div>
        <div className='flex bg-mist-900 gap-5 m-5'>
          <button className='bg-mist-800 p-2 rounded-tl-xl rounded-tr-xl hover:bg-blue-950 cursor-pointer'>App.jsx</button>
          <button className='bg-mist-800 p-2 rounded-tl-xl rounded-tr-xl hover:bg-blue-950 cursor-pointer'>Home.jsx</button>
          <button className='bg-mist-800 p-2 rounded-tl-xl rounded-tr-xl hover:bg-blue-950 cursor-pointer'>Navbar.jsx</button>
        </div>
      </div>
    </div>
  )
}
