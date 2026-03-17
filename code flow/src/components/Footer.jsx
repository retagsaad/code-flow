import React from "react";

export default function Footer() {
  const links = [
    {
      title: "products",
      items: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
    },
    {
      title: "Company",
      items: ["About", "Blog", "Careers", "Press", "Partners"],
    },
    {
      title: "Resources",
      items: [
        "Documentation",
        "Help Center",
        "Community",
        "API Reference",
        "Status",
      ],
    },
    {
      title: "Legal",
      items: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
    },
  ];
  return (
<div className="bg-[#050d31] text-white p-10">    
    <div >
        <img src="logo.png" alt="" />
        <p>
          Transform your workflow with AI-powered tools and automation. Built
          for modern teams.
        </p>
        <div className="flex">
        <a href="#" className="w-10"><img src="facebook.png" alt="" /></a>
        <a href="#" className="w-10"><img src="instagram.png" alt="" /></a>
        <a href="#" className="w-10"><img src="linkedin.png" alt="" /></a>
        <a href="#" className="w-10"><img src="twitter.png" alt="" /></a>
        </div>
      </div>
      <div className="flex justify-between ">
        {links.map((link, key) => (
          <div key={key}>
            <h2 className="font-bold mb-3">{link.title}</h2>

            <ul className="space-y-2">
              {link.items.map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className="text-gray-700 mt-5" />
      <div className="flex justify-between mt-5">
        <div>
          <p>© 2025 CodeFlow. All rights reserved.</p>
        </div>
        <div className="flex gap-5 ">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
          <a href="#" className="hover:text-gray-400">Cookie Settings</a>
        </div>
      </div>
    </div>
  );
}
