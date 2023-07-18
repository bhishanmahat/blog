"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const toogleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav
      className={`z-10 w-full fixed top-0 left-0 shadow dark:shadow-dark backdrop-blur-sm bg-white/70 dark:bg-zinc-800/70`}
    >
      <div className="max-w-7xl px-3 h-14 m-auto flex justify-between items-center py-4 font-libreFranklin">
        <div className="">
          {/* nav menu toggle button */}
          <Link
            className="font-medium tracking-wider text-rose-600 dark:text-rose-500 text-lg"
            href="/"
          >
            bhishan
          </Link>
        </div>

        {/* primary nav */}
        <div className="space-x-6 hidden sm:block text-base">
          <Link href="#">Articles</Link>
          <Link href="#">My Pick</Link>
          <Link href="#">Contact Us</Link>
        </div>

        {/* secondary nav */}
        <div className="flex items-center p-2 space-x-3">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input onClick={toogleTheme} type="checkbox" />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <button className="btn-main text-lg hidden sm:inline-block">Sign up</button>
          <button
            onClick={toggleNavbar}
            className="p-1 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-700 sm:hidden"
          >
            {isOpen ? (
              <AiOutlineClose size={23} />
            ) : (
              <AiOutlineMenu size={23} />
            )}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden w-11/12 mx-auto h-[calc(100vh-4rem)] text-center divide-y divide-gray-400/30`}
      >
        <Link
          className="block py-3 border-t border-gray-400/30 hover:bg-gray-400/30"
          href="#"
        >
          Articles
        </Link>
        <Link className="block py-3 hover:bg-gray-400/30" href="#">
          My Pick
        </Link>
        <Link className="block py-3 hover:bg-gray-400/30" href="#">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
