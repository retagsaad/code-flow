import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { codeExamples, floatingCards } from "../Data/CodeExamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Box() {
  const [activeTab, setActiveTab] = useState("App.jsx");
  const currentFloatingCard = floatingCards[activeTab];
  return (
    <div className="relative w-full max-w-xl bg-gray-900 p-5 rounded-2xl shadow-lg">
      {/* HEADER */}
      <div className="flex justify-between items-center bg-gray-800 p-3 rounded-t-xl">
        <div className="flex items-center gap-3">
          <img src="lights.png" alt="" className="w-8 h-8" />
          <p className="text-sm text-gray-300">CodeFlow AI</p>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-300">
          <span className="px-2 py-1 bg-blue-600 rounded-md text-xs">AI</span>
          <p>React App</p>
          <ChevronDown className="w-4" />
        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-3 mt-4">
        {["App.jsx", "Home.jsx", "Navbar.jsx"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 rounded-lg text-sm border ${
              activeTab === tab
                ? "bg-blue-500/30 text-white border-blue-400/30"
                : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CODE */}
      <div className="mt-4 overflow-hidden rounded-lg border border-gray-700">
        <SyntaxHighlighter
          language="javascript"
          style={nightOwl}
          customStyle={{
            margin: 0,
            fontSize: "12px",
            lineHeight: "1.5",
            background: "transparent",
          }}
        >
          {codeExamples[activeTab]}
        </SyntaxHighlighter>
      </div>

      {/* FLOATING CARD (Glass Effect) */}
      <div
        className={`hidden md:block absolute bottom-0 right-0  w-64 p-4 rounded-xl 
  backdrop-blur-lg border border-white/10 shadow-lg ${currentFloatingCard.bgColor}`}
      >
        {/* HEADER */}
        <div className="flex items-center gap-2 mb-2">
          <div
            className={`w-7 h-7 flex items-center justify-center rounded-md text-xs font-bold ${currentFloatingCard.iconColor} bg-white/10`}
          >
            {currentFloatingCard.icon}
          </div>

          <span
            className={`text-sm font-semibold ${currentFloatingCard.textColor}`}
          >
            {currentFloatingCard.title}
          </span>
        </div>

        {/* CONTENT */}
        <p
          className={`text-xs leading-relaxed ${currentFloatingCard.contentColor}`}
        >
          {currentFloatingCard.content}
        </p>
      </div>
    </div>
  );
}
