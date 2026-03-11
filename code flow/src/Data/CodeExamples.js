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
        <img src="logo.png" alt="" className='w-40 ml-50'/></div>
        </div>
        );
    } 
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
