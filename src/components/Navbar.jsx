import React, { useState } from 'react';
import navLogo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-[80px] sm:h-[110px] w-full flex justify-between items-center px-4 sm:px-[82px]">
      {/* Logo */}
      <div className="pl-4 sm:pl-0">
        <img src={navLogo} className="h-[40px] sm:h-[44px] w-[40px] sm:w-[44px] object-contain" />
      </div>

      {/* Hamburger Icon for smaller screens */}
      <div className="sm:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>

      {/* Links */}
      <div
        className={`sm:flex ${isOpen ? 'flex' : 'hidden'} flex-col sm:flex-row justify-between sm:items-center absolute sm:relative top-[80px] sm:top-0 left-0 w-full sm:w-auto bg-white sm:bg-transparent z-10`}
      >
        <ul className="flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-20 lg:gap-32 font-frank font-medium text-lg sm:text-xl md:text-2xl hover:cursor-pointer sm:pl-0 pl-8 pt-6 sm:pt-0">
          <li>
            <Link
              to="/"
              className="ease-in-out duration-500 hover:text-gray-600"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/howitworks"
              className="ease-in-out duration-500 hover:text-gray-600"
              onClick={toggleMenu}
            >
              How it works
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="ease-in-out duration-500 hover:text-gray-600"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className="ease-in-out duration-500 hover:text-gray-600"
              onClick={toggleMenu}
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;