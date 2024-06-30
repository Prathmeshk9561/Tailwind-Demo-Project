import { IoMdCheckmark } from "react-icons/io";
import { asset10, asset66 } from '../assets/assets';

const Steps = () =>{
    return(
        <>
        <div id="steps" className="px-6 py-12 max-w-7xl mx-auto flex flex-col gap-6">
            <h2 className="text-5xl sm:font-semibold mb-14">How It Works</h2>
            <div className="rounded-xl border gap-6 px-8 py-12 flex flex-col lg:flex-row">
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <span className="border bg-yellow-50 border-yellow-300 font-display text-yellow-300 w-fit px-3 py-1 rounded-lg font-medium">Step 1</span>
                    <h3 className="text-4xl">Bootstrap straight from your web app</h3>
                    <p className="text-lg font-light">Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>
                    <ul className="grid grid-cols-2 gap-2">
                        <li className="flex gap-4">
                            <IoMdCheckmark />
                            <a className="text-lg font-light border-b text-gray-500 border-black" href="">Multiple windows</a>
                        </li>
                        <li className="flex gap-4">
                            <IoMdCheckmark />
                            <a className="text-lg font-light border-b text-gray-500 border-black" href="">Multiple windows</a>
                        </li>
                        <li className="flex gap-4">
                            <IoMdCheckmark />
                            <a className="text-lg font-light border-b text-gray-500 border-black" href="">Multiple windows</a>
                        </li>
                        <li className="flex gap-4">
                            <IoMdCheckmark />
                            <a className="text-lg font-light border-b text-gray-500 border-black" href="">Multiple windows</a>
                        </li>
                        <li className="flex gap-4">
                            <IoMdCheckmark />
                            <a className="text-lg font-light border-b text-gray-500 border-black" href="">Multiple windows</a>
                        </li>
                        <li className="flex gap-4">
                            <IoMdCheckmark />
                            <a className="text-lg font-light border-b text-gray-500 border-black" href="">Multiple windows</a>
                        </li>  
                    </ul>
                </div>

                <div className="pt-12 m-auto">
                    <img src={asset66} alt="" />
                </div>
            </div>


            <div className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row">
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <span className="border bg-yellow-50 border-yellow-300 font-display text-yellow-300 w-fit px-3 py-1 rounded-lg font-medium">Step 2</span>
                    <h3 className="text-4xl">Bootstrap straight from your web app</h3>
                    <p className="text-lg font-light">Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>
                    <ul className="grid grid-cols-2 gap-2">
                        <li className="flex gap-4">
                            <IoMdCheckmark />
                            <a className="text-lg font-light border-b text-gray-500 border-black" href="">Multiple windows</a>
                        </li>
                        <li className="flex gap-4">
                            <IoMdCheckmark />
                            <a className="text-lg font-light border-b text-gray-500 border-black" href="">Multiple windows</a>
                        </li>
                        <li className="flex gap-4">
                            <IoMdCheckmark />
                            <a className="text-lg font-light border-b text-gray-500 border-black" href="">Multiple windows</a>
                        </li>
                        <li className="flex gap-4">
                            <IoMdCheckmark />
                            <a className="text-lg font-light border-b text-gray-500 border-black" href="">Multiple windows</a>
                        </li>
                        <li className="flex gap-4">
                            <IoMdCheckmark />
                            <a className="text-lg font-light border-b text-gray-500 border-black" href="">Multiple windows</a>
                        </li>
                        <li className="flex gap-4">
                            <IoMdCheckmark />
                            <a className="text-lg font-light border-b text-gray-500 border-black" href="">Multiple windows</a>
                        </li>  
                    </ul>
                </div>

                <div className="pt-12 m-auto">
                    <img src={asset66} alt="" />
                </div>
            </div>

            <div className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row">
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <span className="border bg-yellow-50 border-yellow-300 font-display text-yellow-300 w-fit px-3 py-1 rounded-lg font-medium">Step 3</span>
                    <h3 className="text-4xl">Bootstrap straight from your web app</h3>
                    <p className="text-lg font-light">Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>
                    <ul className="grid grid-cols-2 gap-2">
                        <li className="flex gap-4">
                            <IoMdCheckmark />
                            <a className="text-lg font-light border-b text-gray-500 border-black" href="">Multiple windows</a>
                        </li>
                        <li className="flex gap-4">
                            <IoMdCheckmark />
                            <a className="text-lg font-light border-b text-gray-500 border-black" href="">Multiple windows</a>
                        </li>
                        <li className="flex gap-4">
                            <IoMdCheckmark />
                            <a className="text-lg font-light border-b text-gray-500 border-black" href="">Multiple windows</a>
                        </li>
                        <li className="flex gap-4">
                            <IoMdCheckmark />
                            <a className="text-lg font-light border-b text-gray-500 border-black" href="">Multiple windows</a>
                        </li>
                        <li className="flex gap-4">
                            <IoMdCheckmark />
                            <a className="text-lg font-light border-b text-gray-500 border-black" href="">Multiple windows</a>
                        </li>
                        <li className="flex gap-4">
                            <IoMdCheckmark />
                            <a className="text-lg font-light border-b text-gray-500 border-black" href="">Multiple windows</a>
                        </li>  
                    </ul>
                </div>

                <div className="pt-12 m-auto">
                    <img src={asset66} alt="" />
                </div>
            </div>
        </div>
        </>
    );
}
export default Steps;