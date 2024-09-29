import React from 'react'

export const Knowus = () => {
  return (
    <div className="grid grid-rows-3 m-5 ">
        <div className="">
            <div className="flex text-center justify-center items-center">
              <h4 className="text-[#5F5F5F] md:text-[3.175rem] text-[2.5rem] font-semibold">
                Our Mission
              </h4>
            </div>
          <div className="grid lg:grid-cols-2 lg:grid-rows-1 sm:grid-rows-2 mx-h-[33.3125rem]"> 
              <div className="flex justify-center items-center">
                <img src="/icons/ourmission.png" alt="" />
              </div>
              <div className="flex items-center justify-end text-right">
                <div className="pr-5 border-r-[12px] border-[#4285F4] rounded-lg">
                  <p className="text-[1.5rem] md:text-[1.875rem] text-[#5F5F5F] font-[500] justify">
                    Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.
                  </p>
                </div>  
              </div>
          </div>
        </div>
        <div className="">
            <div className="flex text-center justify-center items-center">
              <h4 className="text-[#5F5F5F] text-[2.5rem] md:text-[3.175rem] font-semibold">
                Our Perspective
              </h4>
            </div>
          <div className="grid lg:grid-cols-2 lg:grid-rows-1 sm:grid-rows-2">  
              <div className="flex items-center justify-end text-left">
                <div className="pl-5 border-l-[12px] border-[#0F9D56] rounded-lg">
                  <p className="text-[1.5rem] md:text-[1.875rem] text-[#5F5F5F] font-[500] justify">
                    We’re a community-driven initiative aiming to bridge the gap between research and practice , develop evolutionary thinking and network throughout the process. We believe in connecting fellow developers , spreading stimulative ideas and working for a solution driven team.
                  </p>
                </div>  
              </div>
              <div className="flex justify-center items-center">
                <img src="/icons/perss.png" alt="" />
              </div>
          </div>
        </div>
        <div className="">
            <div className="flex text-center justify-center items-center">
              <h4 className="text-[#5F5F5F] text-[2.5rem] md:text-[3.175rem] font-semibold">
                What Keeps Us Going?
              </h4>
            </div>
          <div className="grid lg:grid-cols-2 lg:grid-rows-1 sm:grid-rows-2"> 
              <div className="flex justify-center items-center">
                <img src="/icons/going.png" alt="" />
              </div>
              <div className="flex items-center justify-end text-right">
                <div className="pr-5 border-r-[12px] border-[#FFC727] rounded-lg">
                  <p className="text-[1.5rem] md:text-[1.875rem] text-[#5F5F5F] font-[500] justify">
                    Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights.
                    The entire team works in coordination, to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.
                  </p>
                </div>  
              </div>
          </div>
        </div>

      </div>
  )
}
