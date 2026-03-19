export const codeExamples = {
  "App.jsx": `
    import {useState} from "react";
    import {CodeFlow} from "@codeflow/ai";
    function App(){
    const [code,setCode] =useState("");
    const handeleAIComletion=async() =>{
        const suggestion = await CodeFlow.complete{code};
        setCode(suggestion);
        };
        return(
       <div className='min-h-screen bg-linear-to-r'>
           <Navbar/>
           <Home/>
           <Features/>
           <Pricing/>
           <AboutUs/>
           <Footer/>
            </div>
        );
    } 
    `,
  "Home.jsx": `
    import React from 'react'
    import Box from './Box'
    function App(){
    const [code,setCode] =useState("");
    const handeleAIComletion=async() =>{
    const suggestion = await CodeFlow.complete{code};
      setCode(suggestion);
      };
      return(
      <div className="app">
      <CodeEditor 
      onChange={setCode}
      onAI={handeleAIcompletion}
      />
      <div>
      <img src="logo.png"/>
      </div>
      </div>
    );}
    `,
  "Navbar.jsx": `
    import React, { useState } from 'react'
    import { ChevronDown } from 'lucide-react';
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import {codeExamples} from '../Data/CodeExamples'
    function App(){
    const [code,setCode] =useState("");
    const handeleAIComletion=async() =>{
        const suggestion = await CodeFlow.complete{code};
        setCode(suggestion);
        };
        return(
        <div className="app">
        <CodeEditor 
        onChange={setCode}
        onAI={handeleAIcompletion}
        />
        </div>
        );
    } 
    `,
};

export const floatingCards = {
  "App.jsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "AI",
    title: "Smart Completion",
    content: "AI-powered code suggestion in real-time",
  },
  "Home.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "⚡",
    title: "Auto Animation",
    content: "Dynamic typing effects generated automatically",
  },
  "Navbar.jsx": {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: "🔍",
    title: "Smart Search",
    content: "Intelligent code search across your project ",
  },
};
