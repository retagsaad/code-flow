import React from "react";
const Boxes = [
  {
    title: "Starter",
    discription: "Perfect for individuals and small teams",
    price: "$29 ",
    per: "/month",
    features: [
      "☑️ Up to 5 team members",
      "☑️ 10GB storage",
      "☑️ Basic analytics",
      "☑️ Email support",
      "☑️ API access",
      "☑️ Mobile app",
    ],
    button: "Get Started",
  },
  {
    title: "Professional",
    discription: "Best for growing businesses",
    price: "$79 ",
    per: "/month",
    features: [
      "☑️ Up to 25 team members",
      "☑️ 100GB storage",
      "☑️ Advanced analytics",
      "☑️ Priority support",
      "☑️ API access",
      "☑️ Mobile app",
      "☑️ Custom integrations",
      "☑️ Advanced security",
    ],
    button: "Get Started",
    tag: "⭐Most Popular",
    border: "border border-blue-600",
  },
  {
    title: "Enterprise",
    discription: "For large organizations",
    price: "$199 ",
    per: "/month",
    features: [
      "☑️ Unlimited team members",
      "☑️ Unlimited storage",
      "☑️ Enterprise analytics",
      "☑️ 24/7 phone support",
      "☑️ API access",
      "☑️ Mobile app",
      "☑️ Custom integrations",
      "☑️ Advanced security",
      "☑️ Dedicated account manager",
      "☑️ Custom SLA",
    ],
    button: "Get Started",
  },
];

export default function PricingBox() {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-10 lg:px-20 py-16 justify-center flex">
      <div className="flex flex-col md:flex-row items-stretch gap-6 justify-center">
        {Boxes.map((Box, key) => (
          <div
            key={key}
            className={` ${Box.border} relative flex flex-col w-full max-w-sm bg-[#010b38]/40 p-6 rounded-2xl `}
          >
            {Box.tag && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-xs px-3 py-1 rounded-full">
                {Box.tag}
              </span>
            )}

            <h2 className="text-xl font-bold text-center">{Box.title}</h2>

            <p className="text-gray-500 text-center my-2">{Box.discription}</p>

            <h1 className="text-3xl text-blue-400 text-center my-4 font-bold">
              {Box.price}
              <span className="text-sm text-gray-500">{Box.per}</span>
            </h1>

            <ul className="flex flex-col gap-2 text-gray-400 grow">
              {Box.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <button className="mt-auto bg-blue-500 py-2 rounded-lg ">
              {Box.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
