import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const getLinkClass = (path) => location.pathname === path ? 'text-white' : 'text-[#aeadac]';

  return (
    <>
      <div className='container-fluid border-b fixed top-0 left-0 right-0 bg-[#0202028f] backdrop-blur-xs border-zinc-800 flex items-center justify-between px-7 py-4 z-11'>
        <div className="left">
          <Link to='/'>
            <img src="logo.PNG" alt="Logo" />
          </Link>
        </div>
        <div className="mid text-[14px] font-semibold gap-8 hidden lg:flex">
          <Link className={`${getLinkClass('/features')} text-[#4b4a4a] hover:text-white px-3 py-1 duration-200`} to='/features'>FEATURES</Link>
          <Link className={`${getLinkClass('/pricing')} text-[#aeadac] hover:text-white px-3 py-1 duration-200`} to='/pricing'>PRICING</Link>
          <Link className={`${getLinkClass('/how-to-use')} text-[#aeadac] hover:text-white px-3 py-1 duration-200`} to='/how-to-use'>HOW TO USE</Link>
          <Link className={`${getLinkClass('/roadmap')} text-[#aeadac] hover:text-white px-3 py-1 duration-200`} to='/roadmap'>ROADMAP</Link>
        </div>
        <div className="right text-[14px] flex items-center gap-8 font-semibold">
          <Link className={`text-[#aeadac] hover:text-white hidden lg:block duration-200`} to='/newaccount'>NEW ACCOUNT</Link>
          <button
            className='duration-200 px-2 py-1 rounded-md bg-purple-600 hover:text-purple-200 hover:border-purple-500 cursor-pointer'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <h1 className='hidden lg:block'>SIGN IN</h1>
            <GiHamburgerMenu className='lg:hidden text-[#aeadac]' size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='w-full h-screen mt-16 bg-[#070014] lg:hidden flex flex-col items-center'>
          <div className="mid w-full text-[22px] flex flex-col font-semibold gap-3 mt-16">
            <Link className='text-[#aeadac] hover:text-white px-3 py-2 text-center' to='/features'>FEATURES</Link>
            <Link className='text-[#aeadac] hover:text-white px-3 py-2 text-center' to='/pricing'>PRICING</Link>
            <Link className='text-[#aeadac] hover:text-white px-3 py-2 text-center' to='/how-to-use'>HOW TO USE</Link>
            <Link className='text-[#aeadac] hover:text-white px-3 py-2 text-center' to='/roadmap'>ROADMAP</Link>
            <Link className='text-[#aeadac] hover:text-white px-3 py-2 text-center' to='/newaccount'>NEW ACCOUNT</Link>
            <Link className='text-white rounded-md  bg-purple-800 py-2 text-center hover:bg-purple-900' to='/signin'>SIGN IN</Link>
          </div>
        </div>
      )}
    </>
  );
};
