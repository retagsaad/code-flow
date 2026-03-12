const features=[
  {
    title:"AI Code Completion",
    description:"",
    image:"code-completion",
    imagePosition:"left",
  },
    {
    title:"AI Code Completion",
    description:"",
    image:"code-completion",
    imagePosition:"right",
  },
    {
    title:"AI Code Completion",
    description:"",
    image:"code-completion",
    imagePosition:"left",
  },
    {
    title:"AI Code Completion",
    description:"",
    image:"code-completion",
    imagePosition:"right",
  },
]
import {codeExamples} from '../Data/CodeExamples'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Features() {
  return (
    <div id='features' className="mt-50 max-w-300 mx-auto px-5 scroll-smooth">
      <div >
        <h1 className='text-white font-bold text-5xl leading-snug ml-65'>Your Complete Development <br /> <span className="text-blue-400 ml-50">Workflow</span></h1>
      </div>


    <div className='bg-gray-800/40  p-5 rounded-xl w-lg h-full mt-20'>
        <div>
          <h1></h1>
          <p></p>
        </div>

       <div className=' '>
          <div className='flex gap-5 ml-3'>
          <img src="lights.png" alt="" className='w-15 h-10 '/>
          <p className='mt-1.5'></p>
          </div>
            <SyntaxHighlighter language='javascript' style={nightOwl} customStyle={{margin:0,borderRadius:"8px" ,fontSize:"11px", lineHeight:"1.4", height:"100%", border:"1px solid #3c3c3c"}}>
        kjjkdsad
        </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
