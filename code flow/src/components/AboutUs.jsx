import React from 'react'
import img from '../assets/quote.png'
import person1 from '../assets/person1.jpg'
import person2 from '../assets/person2.jpg'
import person3 from '../assets/person3.jpg'

export default function AboutUs() {
  const Reviews=[
    {
      text:"This AI-powered development platform has revolutionized how we write code. The intelligent suggestions save us hours every day.",
      name:"Sarah Chen",
      title:"Senior Developer",
      img:img,
      person:person1, 
    },
     {
      text:"The automated testing and debugging features are game-changers. We ship code faster and with more confidence than ever before.",
      name:"Marcus Rodriguez",
      title:"Tech Lead",
      img:img,
      person:person3,
    },
     {
      text:"Our development velocity increased by 300% since adopting this platform. It's like having a senior developer pair programming with every team member.",
      name:"Emily Watson",
      title:"CTO",
      img:img,
      person:person2,
    },
  ]
  return (
    <div id='testimonials' className='flex mt-30 justify-center gap-5 sm:block sm:ml-20 md:flex md:ml-0'>
      <div className='w-150 sm:ml-10 md:ml-0'>
        <h1 className='text-4xl sm:text-3xl font-bold w-90 mb-6'>What developers are saying about us</h1>
        <p className='text-gray-500 sm:w-90 md:w-fit'>Everything you need to build, test, and deploy applications with AI-powered development tools.</p>
      </div>
      <div className='mb-2'>
        {Reviews.map((Review,key)=>(
          <div key={key} className='w-100 bg-blue-900/10 p-5 gap-2 m-5'> 
          <div className='flex gap-2'>
          <img src={Review.img} alt="" className='text-left flex justify-start w-6 h-6 mr-2'/>
          <p>{Review.text}</p>
          </div>
          <div className='flex gap-2 ml-8 mt-3'>
            <img src={Review.person} alt="" className='w-10 h-10 rounded-4xl'/>
            <div>
            <p>{Review.name}</p>
            <p className='text-gray-500  '>{Review.title}</p>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}
