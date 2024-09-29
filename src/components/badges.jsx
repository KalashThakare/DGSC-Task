import React from 'react'

export const Badges = () => {
  return (
    <div className="mt-[21.875rem] mb-[21.875rem] mr-8 ml:8">
          <div className="grid md:grid-rows-4 md:grid-cols-1 xl:grid-cols-4 xl:grid-rows-1 sm:grid-rows-4 sm:grid-cols-1 gap-20">
            <div>
              <div className="">
                <div className="bg-[url('/icons/circle.png')] bg-no-repeat bg-center flex justify-center items-center bg-contain h-[15rem]">
                  <h3 className="flex font-bold text-[4.6875rem] text-center text-[#5F5F5F]">
                    03+
                  </h3>
                </div>
              </div>
              <div className="items-center text-center text-[42px] font-[400] text-[#353535]">
                Years
              </div>
            </div>

            <div>
              <div className="">
                <div className="bg-[url('/icons/circle.png')] bg-no-repeat bg-center flex justify-center items-center bg-contain h-[15rem]">
                  <h3 className="flex justify-center items-center font-bold text-[4.6875rem] text-center text-[#5F5F5F]">
                    10+
                  </h3>
                </div>
              </div>
              <div className="items-center text-center text-[42px] font-[400] text-[#353535]">
                Events
              </div>
            </div>
            
            <div>
              <div className="">
                <div className="bg-[url('/icons/circle.png')] bg-no-repeat bg-center flex justify-center items-center bg-contain h-[15rem]">
                  <h3 className="flex justify-center items-center font-bold text-[4.6875rem] text-center text-[#5F5F5F]">
                    1K+
                  </h3>
                </div>
              </div>
              <div className="items-center text-center text-[42px] font-[400] text-[#353535]">
                Community Members
              </div>
            </div>
            <div>
              <div className="">
                <div className="bg-[url('/icons/circle.png')] bg-no-repeat bg-center flex justify-center items-center bg-contain h-[15rem]">
                  <h3 className="flex justify-center items-center font-bold text-[4.6875rem] text-center text-[#5F5F5F]">
                    200+
                  </h3>
                </div>
              </div>
              <div className="items-center text-center text-[42px] font-[400] text-[#353535]">
                Attendees
              </div>
            </div>
            
          </div>
        </div>
  )
}
