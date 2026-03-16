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
      person:person2,
    },
     {
      text:"Our development velocity increased by 300% since adopting this platform. It's like having a senior developer pair programming with every team member.",
      name:"Emily Watson",
      title:"CTO",
      img:img,
      person:person3,
    },
  ]
  return (
    <div id='testimonials' className='flex mt-30'>
      <div>
        <h1>What developers are saying about us</h1>
        <p>Everything you need to build, test, and deploy applications with AI-powered development tools.</p>
      </div>
      <div>
        {Reviews.map((Review,key)=>(
          <div key={key}> 
          <img src={img} alt="" />
          <p>{Review.text}</p>
          <div>
            <img src={Review.person} alt="" className='w-10 rounded-2xl'/>
            <p>{Review.name}</p>
            <p>{Review.title}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}
