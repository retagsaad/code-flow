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
    <div className="flex mt-15  justify-center">
      {Boxes.map((Box, key) => (
        <div
          key={key}
          className="bg-[#010b38]/40 w-90 h-150 m-5 p-5 rounded-2xl flex flex-col sm:w-50 sm:h-fit md:w-90 md:h-150"
        >
          <div className="">
            <p className="absolute top-559 left-180 bg-blue-500 rounded-2xl w-32 sm:left-65 sm:top-772 md:left-180 md:top-559">{Box.tag}</p>
            <h1 className="font-bold text-center text-2xl">{Box.title}</h1>
            <p className="   text-center text-gray-600 my-2">
              {Box.discription}
            </p>
            <h1 className="font-bold text-center text-4xl text-blue-400 mb-7 mt-3 sm:text-3xl md:text-4xl">
              {Box.price}{" "}
              <span className="text-sm text-gray-500">{Box.per}</span>
            </h1>
          </div>
          <ul className="flex flex-col gap-2 grow">
            {Box.features.map((feature, i) => (
              <li key={i} className="text-gray-400">
                {feature}
              </li>
            ))}
          </ul>
          <button className="mt-auto sm:mt-5 md:mt-auto w-full bg-blue-500 text-white py-2 rounded-lg cursor-pointer">
            {Box.button}
          </button>
        </div>
      ))}
    </div>
  );
}
