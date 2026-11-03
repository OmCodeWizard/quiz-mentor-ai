
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
const App = () => {
  return (
    <div  className="min-h-screen bg-slate-950 text-white  ">
      <Navbar/>
      <Hero/>
      <Features/>
    </div>
  )
}

export default App
