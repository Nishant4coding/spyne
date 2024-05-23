import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/logo.png';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 text-black fixed w-full flex justify-between items-center z-10">
      <div className='flex items-center gap-2'>
        <img src={logo} alt="logo" width={40} height={40} />
        <h1 className="text-2xl font-bold">Spyne Captions</h1>
      </div>
      <div className="hidden md:flex items-center gap-5">
        <NavLink to="/" className="px-4 font-bold py-2 bg-orange-500 text-white rounded-md">
          Home
        </NavLink>
        <NavLink to="/doc" className="px-4 py-2 bg-orange-500 text-white font-bold rounded-md">
          Documentation
        </NavLink>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-orange-500 focus:outline-none">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20 transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-300 ease-in-out md:hidden`}>


        <div className="bg-white w-full h-full p-6">
          <div className="flex items-center justify-between mb-6">
            <img src={logo} alt="logo" width={40} height={40} />
            <h1 className="text-2xl font-bold">Spyne Captions</h1>
            <button onClick={toggleMenu} className="text-orange-500 focus:outline-none">
              <FiX size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-5">
            <NavLink to="/" onClick={toggleMenu} className="px-4 font-bold py-2 bg-orange-500 text-white rounded-md">
              Home
            </NavLink>
            <NavLink to="/documentation" onClick={toggleMenu} className="px-4 py-2 bg-orange-500 text-white font-bold rounded-md">
              Documentation
            </NavLink>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
