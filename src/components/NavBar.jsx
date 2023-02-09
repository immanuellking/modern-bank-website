import React, { useState } from 'react';

import { close, logo, menu } from "../assets";
import { navLinks } from '../constants';

const NavBar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <img src={logo} alt="logo" className="w-[184px] h-[32px]" />

      <ul className="list-none hidden sm:flex justify-end items-center flex-1">
          {
            navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins cursor-pointer font-normal text-base text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`} >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))
          }
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
          src={toggle ? close : menu} 
          alt="menu" 
          className="w-7 h-7 object-contain"
          onClick={() => setToggle(prev => !prev)}
        />

        <div className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[1000]`}>
          <ul className="list-none flex flex-col justify-end items-center">
            {
              navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins cursor-pointer font-normal text-base text-white ${index === navLinks.length - 1 ? "mb-0" : "mb-10"}`} >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))
            }
        </ul>
        </div>
      </div>

    </nav>
  )
};

export default NavBar;