export const codeExamples ={
    "App.jsx":`
    import {useState} from "react";
    import {CodeFlow} from "@codeflow/ai";
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
      "Home.jsx":`
    import {useState} from "react";
    import {CodeFlow} from "@codeflow/ai";
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
      "Navbar.jsx":`
    import {useState} from "react";
    import {CodeFlow} from "@codeflow/ai";
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
    `
}