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
     <div className='min-h-screen bg-linear-to-r from-[#010b38] via-[#031739f5] to-[#02114c] text-white overflow-hidden font-sans scroll-smooth '>
      <Navbar/>
    <Home className=''/>
    <Features/>
    <Pricing/>
    <AboutUs/>
    <Footer/>
     </div>
    </>
  )
}

export default App
