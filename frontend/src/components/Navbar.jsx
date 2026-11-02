import { useState } from "react"
import {Menu,X,Brain} from "lucide-react"


const Navbar = () => {
    const [menu, setMenu] = useState(false);
    return (
        <nav className="border-b border-slate-800 bg-slate-950 text-white" >
            <div className="  px-6 py-4 bg-slate-950  flex items-center justify-between">
                <h2 className=" flex gap-2 items-center text-2xl font-bold ">
                    <Brain size={24}/> 
                    QuizMentor
                </h2>
                 
                 {/* desktop-nav  */}
                <div className="hidden  items-center gap-8 md:flex ">
                    <a href="#home" className="transition hover:text-purple-400">Home</a>
                    <a href="#createQuiz" className="transition hover:text-purple-400">CreateQuiz</a>
                    <a href="#about" className="transition hover:text-purple-400" >About</a>
                    <button className="rounded-full bg-purple-600 px-5 py-2 transition hover:bg-purple-500">Login</button>
                </div>

                <button className="md:hidden text-2xl "
                    onClick={() => setMenu((prev)=>!prev)}
                >
                  {menu ? <X size={28}/>: <Menu size={28}/>}
                </button>
            </div>

                {/* mobile-nav  */}
                {
                    menu && (
                        <div className="flex flex-col px-6 py-6 gap-4 md:hidden ">
                            <a href="#home" className="transition hover:text-purple-400">Home</a>
                            <a href="#createQuiz" className="transition hover:text-purple-400">CreateQuiz</a>
                            <a href="#about" className="transition hover:text-purple-400" >About</a>
                            <button className="rounded-full bg-purple-600 px-5 py-2 transition hover:bg-purple-500">Login</button>
                        </div>
                    )
                }

            
        </nav>
    )
}

export default Navbar



