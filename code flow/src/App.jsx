import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import Pricing from './components/Pricing'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <div className='min-h-screen bg-slate-950 text-white overflow-hidden font-sans scroll-smooth'>
      <Navbar/>
    <Home/>
    <Features/>
    <Pricing/>
    <AboutUs/>
    <Footer/>
     </div>
    </>
  )
}

export default App
