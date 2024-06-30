import { asset0, asset1 } from '../assets/assets';

import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';


const Navbar = () => {

    const [isNavDialogVisible, setIsNavDialogVisible] = useState(false);

    const handleMenuClick = () => {
        setIsNavDialogVisible(true);
        console.log(isNavDialogVisible);
        
    };

    const handleCloseClick = () => {
        setIsNavDialogVisible(false);
    };

    return (
        <nav className="flex bg-white justify-between p-3 shadow-2xl items-center">
            <div className='flex gap-2 items-center flex-1'>
                <img className='max-w-12 max-h-12' src={asset0} alt="logo" />
                <span className='font-medium text-xl font-display'>ToDesktop</span>
            </div>
            <div className='hidden md:flex gap-12'>
                <a href="" className='font-medium hover:text-primary '>Pricing</a>
                <a href="" className='font-medium hover:text-primary '>Docs</a>
                <a href="" className='font-medium hover:text-primary '>Changelog</a>
                <a href="" className='font-medium hover:text-primary '>Blogs</a>
                <a href="" className='font-medium hover:text-primary '>Login</a>
            </div>

            <div className='lg:flex flex-1 justify-end'>
            <button className='hidden md:flex gap-2 items-center border border-primary px-2 py-2 rounded-lg hover:border-grey-600'>
                <img src={asset1} alt="" />
                <span>Electron Developers</span>
                <FaArrowRight />
            </button>
            </div>

            <button id='menu-button' className='p-2 md:hidden' onClick={handleMenuClick}>
                <GiHamburgerMenu className='text-gray-600' />
            </button>

            {isNavDialogVisible && (<div id='nav-dialog' className='fixed bg-white inset-0'>
                <div className='flex justify-between p-3'>
                    <div className='flex gap-2 items-center'>
                        <img className='max-w-12 max-h-12' src={asset0} alt="logo" />
                        <span className='font-medium text-xl font-display'>ToDesktop</span>
                    </div>
                    <button id='cross-button' className='p-2 md:hidden' onClick={handleCloseClick}>
                        <IoCloseSharp className='text-gray-600 font-extrabold' />
                    </button>
                </div>
                <div>
                    <div className='mt-6 flex flex-col'>
                        <a href="" className='font-medium hover:text-primary m-3 p-3'>Pricing</a>
                        <a href="" className='font-medium hover:text-primary m-3 p-3'>Docs</a>
                        <a href="" className='font-medium hover:text-primary m-3 p-3'>Changelog</a>
                        <a href="" className='font-medium hover:text-primary m-3 p-3'>Blogs</a>
                        <a href="" className='font-medium hover:text-primary m-3 p-3'>Login</a>
                    </div>

                    <hr className='text-slate-800 font-extrabold' />

                    <button className='w-80  m-8 flex gap-2 items-center border border-grey-400 px-6 py-2 rounded-lg hover:border-grey-600'>
                        <img src={asset1} alt="" />
                        <span>Electron Developers</span>
                    </button>
                </div>
            </div>
           ) }
        </nav>
    );




}

export default Navbar;