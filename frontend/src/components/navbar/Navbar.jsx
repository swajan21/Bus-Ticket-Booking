import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import { LiaTimesSolid } from 'react-icons/lia';
import { FaBars, FaPhone } from 'react-icons/fa6';
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Theme from '../theme/Theme';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/bus", label: "Bus" },
    { href: "/services", label: "Services" },
  ];

  const handleClick = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  return (
    <div className='w-full h-[8ch] bg-neutral-100 dark:bg-neutral-900 flex items-center md:flex-row lg:px-28 md:px-16 sm:px-7 px-4 fixed top-0 z-50'>

      {/* Logo */}
      <Link to={"/"} className='mr-16'>
        <img src={Logo} alt="logo" className="w-28 h-auto object-contain" />
      </Link>

      {/* Toggle button for mobile */}
      <button onClick={handleClick} className="flex-1 lg:hidden text-neutral-600 dark:text-neutral-300 ease-in-out duration-300 flex items-center justify-end">
        {open ? <LiaTimesSolid className='text-xl' /> : <FaBars className='text-xl' />}
      </button>

      {/* Navigation + Contact + Theme + Login */}
      <div className={`${open ? 'flex absolute top-14 left-0 w-full h-auto md:h-auto md:relative' : 'hidden'} flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-2 md:items-center md:p-0 sm:p-4 p-4 justify-between md:bg-transparent bg-neutral-100 md:shadow-none shadow-md rounded-md`}>

        {/* Nav Links */}
        <ul className="list-none flex md:items-center items-start gap-x-5 gap-y-1 flex-wrap md:flex-row flex-col text-base text-neutral-600 dark:text-neutral-500 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href}
                onClick={handleClose}
                className="hover:text-violet-600 ease-in-out duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side: Phone, Login, Theme */}
        <div className="flex md:items-center items-start gap-x-5 gap-y-2 flex-wrap md:flex-row flex-col text-base font-medium text-neutral-800">

          {/* Phone box */}
          <div className="relative bg-violet-600 rounded-md px-8 py-2 w-fit cursor-pointer">
            <div className="absolute top-[50%] -left-6 translate-y-[-50%] w-9 h-9 rounded-full bg-violet-600 border-4 border-neutral-100 dark:border-neutral-900 flex items-center justify-center">
              <FaPhone className='text-neutral-50 text-sm' />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs text-neutral-200 font-light">Need Help?</p>
              <p className="text-xs font-normal text-neutral-50 tracking-wide">01631709199</p>
            </div>
          </div>

          {/* Login Icon + Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200 hover:text-violet-700"
            >
              <UserCircleIcon className="w-7 h-7" />
              <span>Login</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded shadow-md z-50">
                <Link to="/login" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-700">Login</Link>
                <Link to="/register" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-700">Register</Link>
              </div>
            )}
          </div>

          {/* Theme Switcher */}
          <Theme />
        </div>
      </div>
    </div>
  );
};

export default Navbar;