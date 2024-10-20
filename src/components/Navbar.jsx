
import { Link } from 'react-router-dom';
import Nuke from '../assets/explosion.svg'
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScrollTop && currentScroll > 50) {
      setIsVisible(false); // Scrolling down
    } else {
      setIsVisible(true); // Scrolling up
    }
    setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll); // For Mobile or negative scrolling
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <header
    className={`fixed inset-x-0 top-0 z-30 mx-auto w-full tex-white max-w-screen-md border  bg-gray-900/80 py-3 shadow backdrop-blur-lg md:top-1 md:rounded-3xl lg:max-w-screen-lg transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
  >
    <div className="px-4">
      <div className="flex items-center justify-between">
        <div className="flex shrink-0">
          <a aria-current="page" className="flex items-center" href="/">
            <img className="h-7 w-auto" src={Nuke} alt="Logo" />
            <p className="text-green-500 font-semibold">Nuke</p>
          </a>
        </div>
        <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
          <Link
            aria-current="page"
            className="inline-block rounded-lg px-2 py-1 text-sm font-medium  0 transition-all duration-200  hover:text-gray-900"
            href="#"
          >
            How it works
          </Link>

          <Link
            className="inline-block rounded-lg px-2 py-1 text-sm font-medium t  transition-all duration-200  hover:text-gray-900"
            href="#"
          >
            Pricing
          </Link>
        </div>
        <div className="flex items-center justify-end gap-3">
          <Link
            className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
            to="/signup"
          >
            Sign up
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  </header>
  );
}

export default Navbar;
