import React from "react";

export default function Footer() {
  const links = [
    {
      title: "Products",
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
    <div className="bg-[#020a2d] text-white p-10">
      <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] ">
        <div className="col-span-1">
          <img src="logo.png" alt="" className="w-40" />
          <p className="text-gray-400 max-w-xs leading-relaxed ml-5">
            Transform your workflow with AI-powered tools and automation. Built
            for modern teams.
          </p>
          <div className="flex gap-2 my-5 ml-5">
            <a href="#" className="w-6 h-7">
              <img src="facebook.png" alt="" />
            </a>
            <a href="#" className="w-6">
              <img src="instagram.png" alt="" />
            </a>
            <a href="#" className="w-6">
              <img src="linkedin.png" alt="" />
            </a>
            <a href="#" className="w-6">
              <img src="youtube.png" alt="" />
            </a>
          </div>
        </div>
        {links.map((link, key) => (
          <div key={key}>
            <h2 className="font-bold  mb-3">{link.title}</h2>
            <ul className="space-y-2">
              {link.items.map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className="border-gray-700 my-5" />
      <div className="flex justify-between mt-5">
        <div>
          <p>© 2025 CodeFlow. All rights reserved.</p>
        </div>
        <div className="flex gap-5 ">
          <a href="#" className="hover:text-gray-400 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            Cookie Settings
          </a>
        </div>
      </div>
    </div>
  );
}
