import React from 'react'

export const Hero = () => {
  return (
    <div>
        <div className="flex justify-center items-center">
        <div className="flex justify-center items-center text-center text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.44rem] font-[700]">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC04]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#0F9D58]">l</span>
          <span className="text-[#EA4335] mr-3">e</span> Developer Groups
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center text-[#646464] lg:text-[3.125rem] text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-[700]">
          RBU Chapter
        </div>
      </div>

      <div className="flex justify-center items-center pt-2">
        <img src="/icons/OBJECTS.png" alt="" />
      </div>
      <div className="flex justify-center items-center p-2 mb-20">
        <div className="justify-center items-center w-[58.4375rem] h-[8.4375rem] m-5 mx-auto">
          <h3 className="font-semibold text-[2.1875rem] semism-1 text-[#5F5F5F] text-center">
            Google Developer Student Clubs are community groups for college and university students interested in Google developer technologies.
          </h3>
        </div>
      </div>
    </div>
  )
}
