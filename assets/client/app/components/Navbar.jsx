"use client";
import Link from "next/link";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect, useState, useReducer } from "react";
import reducerOne from '@/app/user/reducer';

const Navbar = () => {
  const [navbarNavOpen, setNavbarNavOpen] = useState(false);
  // const [authenticated, setAuthenticated] = useState(0);

  const [authenticated, dispatch] = useReducer(reducerOne, {});

  console.log("authenticated", authenticated);

  // useEffect(() => {
    
  // }, []);

  return (
    <div className="md:flex items-center justify-between bg-[#1da1f2] py-4 md:px-10 px-7">
      {/* logo section */}
      <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
        <span>Soteria</span>
      </div>
      {/* Menu icon */}
      <div
        onClick={() => setNavbarNavOpen(!navbarNavOpen)}
        className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
      >
        {navbarNavOpen ? <FaTimesCircle /> : <FaBars />}
      </div>
      {/* linke items */}
      <ul
        className={`bg-midnight md:flex md:pb-0 pb-8 absolute md:static bg-[#1da1f2] md:z-auto z-[100] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          navbarNavOpen ? "top-12" : "top-[-490px]"
        }`}
      >
        <li className="md:ml-8 md:my-0 my-7 font-semibold">
          <Link
            onClick={() => setNavbarNavOpen(!navbarNavOpen)}
            href="/user/login"
            className="text-gray-800 hover:text-white duration-500"
          >
            User
          </Link>
        </li>

        {authenticated ? (
          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <Link
              onClick={() => setNavbarNavOpen(!navbarNavOpen)}
              href="/asset/new"
              className="text-gray-800 hover:text-white duration-500"
            >
              Asset
            </Link>
          </li>
        ) : null}
      </ul>
      authenticated: {authenticated.authenticated}
    </div>
  );
};

export default Navbar;
