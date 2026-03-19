import React from "react";
import Box from "./Box";
export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-10 lg:px-20 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* TEXT */}
        <div className="w-full md:w-1/2">
          <div className="bg-slate-900 w-fit px-4 py-1 rounded-full text-sm text-gray-400 mb-4">
            ✨ Introducing CodeFlow AI 2.0
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Code Faster <br />
            <span className="text-blue-400">Build Better</span>
            <br />
            With CodeFlow AI
          </h1>

          <p className="text-gray-500 mt-5 max-w-md">
            Accelerate your development workflow with intelligent code
            completion, automated testing, and smart debugging.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button className="flex bg-blue-500 p-3 mr-7 rounded-xl  cursor-pointer ">
              <a href="#" className="mr-3">
                Start Coding Free
              </a>
              <img
                src="arrow.png"
                alt=""
                className="cursor-pointer w-5 h-4 mt-1.5"
              />
            </button>
            <button className="flex rounded-xl bg-gray-900 p-2 cursor-pointer">
              <img
                src="play_icon.png"
                alt=""
                className="w-9 h-9 cursor-pointer mt-1"
              />
              <a href="#" className="mt-2">
                Watch Demo
              </a>
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative">
          <Box />
        </div>
      </div>
    </div>
  );
}
