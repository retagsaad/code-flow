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
    <div className="bg-[#020a2d] text-white px-5 md:px-10 lg:px-20 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* LOGO */}
        <div>
          <img src="logo.png" className="w-32 mb-4" />
          <p className="text-gray-400 max-w-xs">
            Transform your workflow with AI-powered tools and automation.
          </p>
          <div className="flex gap-2 mt-5">
            <img src="facebook.png" alt="" className="w-6" />
            <img src="instagram.png" alt="" className="w-6" />
            <img src="linkedin.png" alt="" className="w-6" />
            <img src="youtube.png" alt="" className="w-6" />
          </div>
        </div>

        {/* LINKS */}
        {links.map((link, key) => (
          <div key={key}>
            <h2 className="font-semibold mb-3">{link.title}</h2>
            <ul className="space-y-2">
              {link.items.map((item, i) => (
                <li key={i} className="text-gray-400 hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="border-gray-700 my-8" />

      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
        <p>© 2025 CodeFlow</p>

        <div className="flex gap-5">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>
  );
}
