import './App.css'
import Home from './components/Home'
import Features from './components/Features'
import Pricing from './components/Pricing'
import AboutUs from './components/AboutUs'

function App() {

  return (
    <>
     <div className='min-h-screen bg-slate-950 text-white overflow-hidden'>
    <Home/>
    <Features/>
    <Pricing/>
    <AboutUs/>
     </div>
    </>
  )
}

export default App
