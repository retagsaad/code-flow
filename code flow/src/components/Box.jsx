import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { codeExamples, floatingCards } from "../Data/CodeExamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Box() {
  const [activeTab, setActiveTab] = useState("App.jsx");
  const cuurentFloatingCard = floatingCards[activeTab];
  return (
    <div className="bg-gray-900  p-5 rounded-xl w-xl h-full sm:w-lg sm:ml-15">
      <div className="bg-mist-900 rounded-xl  w-full h-full">
        <div className="flex justify-between bg-mist-800 p-2 rounded-t-xl  ">
          <div className="flex gap-5 ml-3">
            <img src="lights.png" alt="" className="w-12 h-10" />
            <p className="mt-1.5">CodeFlow AI</p>
          </div>
          <div className="flex mt-1.5 gap-3 mr-3">
            <p className="w-6 h-7 bg-blue-700 items-center rounded-lg flex justify-center">
              AI
            </p>
            <p>React App</p>
            <ChevronDown className="w-4.5 mt-1" />
          </div>
        </div>
        <div>
          <div className="flex bg-mist-900 gap-5 m-5">
            <button
              className={` p-2 rounded-tl-xl rounded-tr-xl cursor-pointer border border-gray-500 ${activeTab === "App.jsx" ? "bg-blue-500/30 text-white border-blue-400/20 " : "bg-white/5 border-white/10 hover:bg-white/10 "}`}
              onClick={() => setActiveTab("App.jsx")}
            >
              App.jsx
            </button>
            <button
              className={` p-2 rounded-tl-xl rounded-tr-xl cursor-pointer border border-gray-500 ${activeTab === "Home.jsx" ? "bg-blue-500/30 text-white border-blue-400/20 " : "bg-white/5 border-white/10 hover:bg-white/10 "}`}
              onClick={() => setActiveTab("Home.jsx")}
            >
              Home.jsx
            </button>
            <button
              className={` p-2 rounded-tl-xl rounded-tr-xl cursor-pointer border border-gray-500 ${activeTab === "Navbar.jsx" ? "bg-blue-500/30 text-white border-blue-400/20 " : "bg-white/5 border-white/10 hover:bg-white/10 "}`}
              onClick={() => setActiveTab("Navbar.jsx")}
            >
              Navbar.jsx
            </button>
          </div>
          <SyntaxHighlighter
            language="javascript"
            style={nightOwl}
            customStyle={{
              margin: 0,
              borderRadius: "8px",
              fontSize: "11px",
              lineHeight: "1.4",
              height: "100%",
              border: "1px solid #3c3c3c",
            }}
          >
            {codeExamples[activeTab]}
          </SyntaxHighlighter>
        </div>
        <div
          className={`sm:w-60 sm:-bottom-117.5 sm:right-20 lg:block absolute  bottom-40 right-50 transform translate-y-8 w-72 p-5 rounded-xl ${cuurentFloatingCard.bgColor}`}
        >
          <div className="flex items-center space-x-2 mb-2">
            <div
              className={`w-6 h-6 ${cuurentFloatingCard.iconColor} flex items-center justify-center text-sm font-bold`}
            >
              {cuurentFloatingCard.icon}
            </div>
            <span
              className={`text-sm font-medium ${cuurentFloatingCard.textColor}`}
            >
              {cuurentFloatingCard.title}
            </span>
          </div>
          <div
            className={`text-sm text-left ${cuurentFloatingCard.contentColor}`}
          >
            {cuurentFloatingCard.content}
          </div>
        </div>
      </div>
    </div>
  );
}
