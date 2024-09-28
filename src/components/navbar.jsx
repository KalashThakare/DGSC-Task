"use client";
import { Squeeze as Hamburger } from 'hamburger-react';

import React, { useState } from 'react'

export const Navbar = () => {
    const[state,setState]=useState(false);

    const handleClick = () => {
        setState(!state);
      };


  return (
    <div className="flex justify-center items-center sticky z-[100] backdrop-blur-lg shadow h-[100px]">
      <div className="container mx-auto flex justify-between items-center px-10">

        <div className="flex items-center">
          <div className="w-[75px] h-[34.64px] mr-4">
            <img src="/icons/gdg.png" alt="GDG Logo" />
          </div>
          <h1 className="font-Product text-[#868686] text-[25px]">
            GDGC RCOEM
          </h1>
        </div>
        
        <div className="lg:hidden">
          <Hamburger
            toggled={state}
            toggle={handleClick}
            color="#000000"
          />
        </div>

        <nav className={`${ state ? "block" : "hidden"} lg:visible sm:hidden flex items-center gap-8 lg:text-[29px] text-[#868686]`}>
          <a href="#">Home</a>
          <a href="#">Events</a>
          <a href="#">Team</a>
          <a href="#">Alumni</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </div>
  )
}
