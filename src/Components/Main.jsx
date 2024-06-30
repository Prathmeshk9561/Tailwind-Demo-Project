import { FaArrowRight } from "react-icons/fa";
import { FaRegFileCode } from "react-icons/fa";
import { MdLaptop } from "react-icons/md";
import { FaDropbox } from "react-icons/fa";
import { asset2, asset3 ,asset4,asset5,asset6,asset7,asset8,asset9,asset10,asset11 } from '../assets/assets';


const Main = () =>{
    return (
        <main className="overflow-x-hidden">
        <div id="hero" className="min-h-screen bg-gradient-to-b from-purple-50 via bg-orange-50 to-transparent">
            <div id="hero-container" className="max-w-4xl max-auto px-6 pt-6 pb-32 flex flex-col sm:items-center sm:text-center sm:mx-auto" >
                <div id="version-txt" className="flex my-6 gap-2 items-center border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-xl hover:-translate-y-1 group">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
                    <p className="font-display text-yellow-600 font-bold">v0.21.1: <span className="text-yellow-800 font-extrabold">Find-in-page bug fixes</span></p>
                    <FaArrowRight className="text-yellow-600 font-bold group-hover:translate-x-1 transition duration-300"/>
                </div>


                <div id="hero-feature" className="hidden md:flex gap-8 my-6  flex-row">
                    <div className="flex justify-center gap-2 items-center text-gray-500">
                    <FaRegFileCode className="text-sm" />
                    <p>Code Optional</p>
                    </div>
                    <div className="flex justify-center gap-2 items-center text-gray-500">
                    <FaDropbox  className="text-sm" />
                    <p>Drag & drop builder</p>
                    </div>
                    <div className="flex justify-center gap-2 items-center text-gray-500">
                    <MdLaptop className="text-sm" />
                    <p>Window, Mac, Linux</p>
                    </div>
                </div>

                <h1 className="text-4xl font-semibold mt-4 leading-snug sm:text-7xl sm:leading-normal">Web app to desktop app in minutes</h1>
                <p className="sm:text-2xl mt-8 sm:mt-6">Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>
                <div id="button-container" className="mt-12 flex flex-col sm:flex-row  gap-4  ">
                    <button className="px-8 py-3 font-semibold rounded-lg text-white bg-primary shadow-sm hover:bg-opacity-90">Donwload Now</button>
                    <button className="px-8 py-3 font-semibold rounded-lg text-black bg-white shadow-sm border-slate-700  hover:border-gray-800">Read Docs</button>
                </div>
            </div>
            <div id="company-container" className="flex flex-col gap-8">
                <div id="companies-title" className="flex justify-center gap-2">
                    <img className="translate-y-2" src={asset2} alt="" />
                    <span className="font-bold">APPS POWERED BY ToDESKTOP</span>
                    <img className="translate-y-2 -scale-x-100" src={asset2} alt="" />
                </div>
                <div id="company-line-group" className="flex flex-col gap-4 mb-12">
                    <div id="line-1" className="flex gap-4 w-screen flex-wrap justify-center md:gap-40">
                        
                        <div className="flex flex-col p-6 min-w-24 min-h-24 items-center justify-cente0r bg-white rounded-xl border border-gray-300">
                            <img className="w-12 h-12 md:h-16 md:w-16" src={asset3} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>

                        <div className="flex flex-col p-6 min-w-24 min-h-24 items-center justify-cente0r bg-white rounded-xl border border-gray-300">
                            <img className="w-12 h-12 md:h-16 md:w-16" src={asset4} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">LifeAt</span>
                        </div>

                        <div className="flex flex-col p-6 min-w-24 min-h-24 items-center justify-cente0r bg-white rounded-xl border border-gray-300">
                            <img className="w-12 h-12 md:h-16 md:w-16" src={asset5} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Convy</span>
                        </div>

                    </div>

                    <div id="line-2" className="flex gap-4 w-screen flex-wrap  justify-center md:gap-40">
                        
                        <div className="flex flex-col p-6 min-w-24 min-h-24 items-center justify-cente0r bg-white rounded-xl border border-gray-300">
                            <img className="w-12 h-12 md:h-16 md:w-16" src={asset6} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Morgen</span>
                        </div>

                        <div className="flex flex-col min-w-24 p-6 min-h-24 items-center justify-cente0r bg-white rounded-xl border border-gray-300">
                            <img className="w-12 h-12 md:h-16 md:w-16" src={asset7} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Composite</span>
                        </div>

                        <div className="flex flex-col min-w-24 p-6 min-h-24 items-center justify-cente0r bg-white rounded-xl border border-gray-300">
                            <img className="w-12 h-12 md:h-16 md:w-16" src={asset8} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Rise</span>
                        </div>

    
                    </div>

                    <div id="line-3" className="flex gap-4 w-screen flex-wrap justify-center md:gap-40">
    
                        <div className="flex flex-col min-w-24 p-6 min-h-24 items-center justify-cente0r bg-white rounded-xl border border-gray-300">
                            <img className="w-12 h-12 md:h-16 md:w-16" src={asset9} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Notion</span>
                        </div>

                        <div className="flex flex-col min-w-24 p-6 min-h-24 items-center justify-cente0r bg-white rounded-xl border border-gray-300">
                            <img className="w-12 h-12 md:h-16 md:w-16" src={asset10} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Sunsama</span>
                        </div>

                        <div className="flex flex-col min-w-24 p-6 min-h-24 items-center justify-cente0r bg-white rounded-xl border border-gray-300">
                            <img className="w-12 h-12 md:h-16 md:w-16" src={asset11} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Linear</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="h-[1000px]"></div> */}
        </main>
    );
}

export default Main;