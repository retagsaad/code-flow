import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react';
export default function Box() {
  const [activeTab,setActiveTab]=useState("App.jsx")
  return (
    <div className='bg-gray-900  p-5 rounded-xl w-xl h-full'>
      <div className='bg-mist-900 rounded-xl  w-full h-full'>
        <div className='flex justify-between bg-mist-800 p-2 rounded-t-xl  '>
          <div className='flex gap-5 ml-3'>
          <img src="lights.png" alt="" className='w-12 h-10'/>
          <p className='mt-1.5'>CodeFlow AI</p>
          </div>
          <div className='flex mt-1.5 gap-3 mr-3'>
            <p className='w-6 h-7 bg-blue-700 items-center rounded-lg flex justify-center'>AI</p>
            <p>React App</p>
            <ChevronDown className='w-4.5 mt-1'/>
          </div>
        </div>
        <div>
        <div className='flex bg-mist-900 gap-5 m-5'>
          <button className={`bg-mist-800 p-2 rounded-tl-xl rounded-tr-xl hover:bg-blue-950 cursor-pointer border border-gray-500 ${activeTab === "App.jsx" ? "bg-blue-500/30 text-white border-blue-400/20 " : "bg-white/5 border-white/10 hover:bg-white/10 "}`}>App.jsx</button>
          <button className={`bg-mist-800 p-2 rounded-tl-xl rounded-tr-xl hover:bg-blue-950 cursor-pointer border border-gray-500 ${activeTab === "Home.jsx" ? "bg-blue-500/30 text-white border-blue-400/20 " : "bg-white/5 border-white/10 hover:bg-white/10 "}`}>Home.jsx</button>
          <button className={`bg-mist-800 p-2 rounded-tl-xl rounded-tr-xl hover:bg-blue-950 cursor-pointer border border-gray-500 ${activeTab === "Navbar.jsx" ? "bg-blue-500/30 text-white border-blue-400/20 " : "bg-white/5 border-white/10 hover:bg-white/10 "}`}>Navbar.jsx</button>
        </div>

        </div>
      </div>
    </div>
  )
}
