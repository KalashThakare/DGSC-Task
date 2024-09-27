import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="font-sans">
      <div className="grid items-center justify-items-center">
        <div className="flex items-center justify-items-center">
          <h1 className="font-bold lg:text-[84.99px] md:text-[60px] sm:text-[40px] ">
              <span className="text-blue-700">
                G
              </span>
              <span className="text-red-700">
                o
              </span>
              <span className="text-yellow-500">
                o
              </span>
              <span className="text-blue-600">
                g
              </span>
              <span className="text-green-700">
                l
              </span>
              <span className="text-red-700">
                e
              </span> Developer groups  
            </h1>
        </div> 
        <div className="">
          <h2 className="font-bold text-[#646464] lg:text-[50px] ">
            RBU Chapter
          </h2>
        </div>  
      </div>

      <div className="flex justify-center items-center pt-2">
        <img src="/icons/OBJECTS.png" alt="" />
      </div>
      <div className="flex justify-center items-center p-2 mb-20">
        <div className="justify-center items-center w-[935px] h-[126px] m-5">
          <h3 className="font-semibold text-[35px] text-[#5F5F5F] text-center">
            Google Developer Student Clubs are community groups for college and university students interested in Google developer technologies.
          </h3>
        </div>
      </div>

      <div className="grid grid-rows-3 justify-center items-center">
        <div className="h-[70px]  left-[615px] rounded-md bg-[#3686F7] text-white font-bold justify-center items-center text-center flex m-8">
          <a href="" className="text-[30px]">JOIN US</a>
        </div>
        <div className="flex justify-center items-center m-8">
          <div className="grid grid-rows-3">
            <div>
              <img src="/icons/1.png" alt="" />
            </div>
            <div>
              <img src="/icons/2.png" alt="" />
            </div>
            <div>
              <img src="/icons/3.png" alt="" />
            </div>  
          </div>
        </div>

        <div className="flex justify-center items-center text-center">
          <h3 className="text-[#5F5F5F] font-bold text-[60px]">
            Get To Know Us! 
          </h3>
        </div> 
      </div>


      <div className="grid grid-rows-3 m-5">
        <div className="">
            <div className="flex text-center justify-center items-center">
              <h4 className="text-[#5F5F5F] text-[50px] font-semibold">
                Our Mission
              </h4>
            </div>
          <div className="grid grid-cols-2"> 
              <div className="flex justify-center items-center">
                <img src="/icons/mission.jpg" alt="" />
              </div>
              <div className="flex items-center justify-end text-right">
                <div className="pr-5 border-r-[12px] border-[#4285F4] rounded-lg">
                  <p className="text-[30px] text-[#5F5F5F] font-[500] justify">
                    Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.
                  </p>
                </div>  
              </div>
          </div>
        </div>
        <div className="">
            <div className="flex text-center justify-center items-center">
              <h4 className="text-[#5F5F5F] text-[50px] font-semibold">
                Our Perspective
              </h4>
            </div>
          <div className="grid grid-cols-2">  
              <div className="flex items-center justify-end text-left">
                <div className="pl-5 border-l-[12px] border-[#0F9D56] rounded-lg">
                  <p className="text-[30px] text-[#5F5F5F] font-[500] justify">
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
              <h4 className="text-[#5F5F5F] text-[50px] font-semibold">
                What Keeps Us Going?
              </h4>
            </div>
          <div className="grid grid-cols-2"> 
              <div className="flex justify-center items-center">
                <img src="/icons/going.png" alt="" />
              </div>
              <div className="flex items-center justify-end text-right">
                <div className="pr-5 border-r-[12px] border-[#FFC727] rounded-lg">
                  <p className="text-[30px] text-[#5F5F5F] font-[500] justify">
                    Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights.
                    The entire team works in coordination, to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.
                  </p>
                </div>  
              </div>
          </div>
        </div>




        <div className="mt-[230px] mb-[230px] mr-8 ml:8">
          <div className="grid grid-cols-4 gap-4 ">
            <div>
              <div className="bg-[url('/icons/Group5.jpg')] bg-no-repeat bg-center w-full flex justify-center items-center bg-contain">
                <h3 className="flex font-bold text-[75px] text-center">
                  03+
                </h3>
              </div>
            </div>
            <div>
              <div className="bg-[url('/icons/Group5.jpg')] bg-no-repeat bg-center w-full flex justify-center items-center bg-contain">
                <h3 className="flex justify-center items-center font-bold text-[75px] text-center">
                  10+
                </h3>
              </div>
            </div>
            <div>
              <div className="bg-[url('/icons/Group5.jpg')] bg-no-repeat bg-center w-full flex justify-center items-center bg-contain">
                <h3 className="flex justify-center items-center font-bold text-[75px] text-center">
                  1K+
                </h3>
              </div>
            </div>
            <div>
              <div className="bg-[url('/icons/Group5.jpg')] bg-no-repeat bg-center w-full flex justify-center items-center bg-contain">
                <h3 className="flex justify-center items-center font-bold text-[75px] text-center">
                  200+
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      </section>
    </div>  
    
       
   
  );
}
