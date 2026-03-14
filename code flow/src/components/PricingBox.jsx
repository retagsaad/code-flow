import React from 'react'

const Boxes =[
  {
    title:"Starter",
    discription:"Perfect for individuals and small teams",
    price:"$29 /month",
    features:["Up to 5 team members","10GB storage","Basic analytics","Email support","API access","Mobile app"],
    button:"Get Started",
  },
   {
    title:"Professional",
    discription:"Best for growing businesses",
    price:"$79 /month",
    features:["Up to 25 team members","100GB storage","Advanced analytics","Priority support","API access","Mobile app","Custom integrations","Advanced security",],
    button:"Get Started",
    tag:"⭐Most Popular",
  },
   {
    title:"Enterprise",
    discription:"For large organizations",
    price:"$199 /month",
    features:["Unlimited team members","Unlimited storage","Enterprise analytics","24/7 phone support","API access","Mobile app","Custom integrations","Advanced security","Dedicated account manager","Custom SLA"],
    button:"Get Started",
  },
]

export default function PricingBox() {
  return (
    <div className='flex mt-15'>
        {Boxes.map((Box,key)=>(
          <div key={key} className='bg-[#010b38]/40 w-full'>
            <div className=''>
            <div>
              <p>{Box.tag}</p>
              <h1>{Box.title}</h1>
              <p>{Box.discription}</p>
              <h1>{Box.price}</h1>
            </div>
            <div className=' flex flex-col'>
              <p >{Box.features}</p>
            </div>
            </div>
          </div>
        ))}
      
    </div>
  )
}
