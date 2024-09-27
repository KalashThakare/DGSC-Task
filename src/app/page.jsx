import { Navbar } from "@/components/navbar";
import {MapPin,Mails} from "lucide-react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="font-sans">
      <div className="grid items-center justify-items-center">
        <div className="flex items-center justify-items-center">
          <h1 className="font-bold  text-[5.311875rem]">
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
          <h2 className="font-bold text-[#646464] text-[3.175rem] ">
            RBU Chapter
          </h2>
        </div>  
      </div>

      <div className="flex justify-center items-center pt-2">
        <img src="/icons/OBJECTS.png" alt="" />
      </div>
      <div className="flex justify-center items-center p-2 mb-20">
        <div className="justify-center items-center w-[92.1875rem] h-[126px] m-5">
          <h3 className="font-semibold text-[2.1875rem] text-[#5F5F5F] text-center">
            Google Developer Student Clubs are community groups for college and university students interested in Google developer technologies.
          </h3>
        </div>
      </div>

      <div className="grid grid-rows-3 justify-center items-center">
        <div className="h-[70px] left-[615px] rounded-md bg-[#3686F7] text-white font-bold justify-center items-center text-center flex m-8">
          <a href="" className="text-[1.875rem]">JOIN US</a>
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
          <h3 className="text-[#5F5F5F] font-bold text-[3.75rem]">
            Get To Know Us! 
          </h3>
        </div> 
      </div>


      <div className="grid grid-rows-3 m-5">
        <div className="">
            <div className="flex text-center justify-center items-center">
              <h4 className="text-[#5F5F5F] text-[3.175rem] font-semibold">
                Our Mission
              </h4>
            </div>
          <div className="grid grid-cols-2"> 
              <div className="flex justify-center items-center">
                <img src="/icons/mission.jpg" alt="" />
              </div>
              <div className="flex items-center justify-end text-right">
                <div className="pr-5 border-r-[12px] border-[#4285F4] rounded-lg">
                  <p className="text-[1.875rem] text-[#5F5F5F] font-[500] justify">
                    Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.
                  </p>
                </div>  
              </div>
          </div>
        </div>
        <div className="">
            <div className="flex text-center justify-center items-center">
              <h4 className="text-[#5F5F5F] text-[3.175rem] font-semibold">
                Our Perspective
              </h4>
            </div>
          <div className="grid grid-cols-2">  
              <div className="flex items-center justify-end text-left">
                <div className="pl-5 border-l-[12px] border-[#0F9D56] rounded-lg">
                  <p className="text-[1.875rem] text-[#5F5F5F] font-[500] justify">
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
              <h4 className="text-[#5F5F5F] text-[3.175rem] font-semibold">
                What Keeps Us Going?
              </h4>
            </div>
          <div className="grid grid-cols-2"> 
              <div className="flex justify-center items-center">
                <img src="/icons/going.png" alt="" />
              </div>
              <div className="flex items-center justify-end text-right">
                <div className="pr-5 border-r-[12px] border-[#FFC727] rounded-lg">
                  <p className="text-[1.875rem] text-[#5F5F5F] font-[500] justify">
                    Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights.
                    The entire team works in coordination, to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.
                  </p>
                </div>  
              </div>
          </div>
        </div>




        <div className="mt-[21.875rem] mb-[21.875rem] mr-8 ml:8">
          <div className="grid grid-cols-4 gap-4 ">
            <div>
              <div className="bg-[url('/icons/Group5.jpg')] bg-no-repeat bg-center w-full flex justify-center items-center bg-contain">
                <h3 className="flex font-bold text-[4.6875rem] text-center">
                  03+
                </h3>
              </div>
            </div>
            <div>
              <div className="bg-[url('/icons/Group5.jpg')] bg-no-repeat bg-center w-full flex justify-center items-center bg-contain">
                <h3 className="flex justify-center items-center font-bold text-[4.6875rem] text-center">
                  10+
                </h3>
              </div>
            </div>
            <div>
              <div className="bg-[url('/icons/Group5.jpg')] bg-no-repeat bg-center w-full flex justify-center items-center bg-contain">
                <h3 className="flex justify-center items-center font-bold text-[4.6875rem] text-center">
                  1K+
                </h3>
              </div>
            </div>
            <div>
              <div className="bg-[url('/icons/Group5.jpg')] bg-no-repeat bg-center w-full flex justify-center items-center bg-contain">
                <h3 className="flex justify-center items-center font-bold text-[4.6875rem] text-center">
                  200+
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-3 ">
          <div className="flex justify-center items-center m-3">
            <div className="border-[#FF6060] border-[0.375rem] w-full">
            </div>
          </div>
          <div className="text-[#5F5F5F] font-bold text-[4.375rem]  flex justify-center items-center">
            Technologies
          </div>
          <div className="flex justify-center items-center m-3">
            <div className="border-[#FF6060] border-[6px] w-full">
            </div>
          </div>
        </div>
        <div className="p-10 pt-0">
          <div className="flex justify-center items-center">
            <h3 className="text-[#5F5F5F] text-[32px] font-[400]">
              Domains That Excite Us to Collaborate and Teach!
            </h3>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center m-10">
          <h2 className="text-[#5F5F5F] font-bold text-[4.375rem]">
            FAQs
          </h2>
        </div>
        <section className="grid grid-rows-5 gap-5">
          <div className="mt-7 justify-center items-center p-2 pt-0 ">
            <div className="max-w-[54.1875rem] mx-auto">
              <div className="m-15 items-center justify-center ">
                <div className="border-[#E1E1E1] rounded-[54px] border-[10px]">
                  <div className="flex items-center">
                    <div className="m-3 ml-10 justify-start">
                      <img src="/icons/vectorred.jpg" alt="" />
                    </div>
                    <div className="flex justify-start items-center m-3 ">
                      <h3 className="text-[2rem] text-[#5F5F5F] font-bold">
                        What is GDG?
                      </h3>
                    </div>
                  </div>
                  
                </div>
            </div>
            </div>
            <div className="max-w-[44.11125rem] mx-auto mt-6">
              <div className="border-l-[#DB4437] rounded-[15px] border-l-[15px] ">
                <div className="border-[#E1E1E1] rounded-l-[0px] rounded-r-[17px] border-l-[10px] border-[17px] p-6">
                  <p className="text-[1.5625rem] text-[#5F5F5F] font-[400] ">
                  Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="mt-7 justify-center items-center p-2 pt-0 ">
            <div className="max-w-[54.1875rem] mx-auto">
              <div className="m-15 items-center justify-center ">
                <div className="border-[#E1E1E1] rounded-[54px] border-[10px]">
                  <div className="flex items-center">
                    <div className="m-3 ml-10 justify-start">
                      <img src="/icons/vectorgreen.jpg" alt="" />
                    </div>
                    <div className="flex justify-start items-center m-3 ">
                      <h3 className="text-[2rem] text-[#5F5F5F] font-bold">
                       How can you become a part of GDG ?
                      </h3>
                    </div>
                  </div>
                  
                </div>
            </div>
            </div>
            <div className="max-w-[44.11125rem] mx-auto mt-6">
              <div className="border-l-[#0F9D56] rounded-[15px] border-l-[15px] ">
                <div className="border-[#E1E1E1] rounded-l-[0px] rounded-r-[17px] border-l-[10px] border-[17px] p-6">
                  <p className="text-[1.5625rem] text-[#5F5F5F] font-[400] ">
                    We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It’s a two step process involving form filling and personal interview. Students acing both rounds are selected to be the part of the core team.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="mt-7 justify-center items-center p-2 pt-0 ">
            <div className="max-w-[54.1875rem] mx-auto">
              <div className="m-15 items-center justify-center ">
                <div className="border-[#E1E1E1] rounded-[54px] border-[10px]">
                  <div className="flex items-center">
                    <div className="m-3 ml-10 justify-start">
                      <img src="/icons/vectorblue.jpg" alt="" />
                    </div>
                    <div className="flex justify-start items-center m-3 ">
                      <h3 className="text-[2rem] text-[#5F5F5F] font-bold">
                        What does a GDG Lead do?
                      </h3>
                    </div>
                  </div>
                  
                </div>
            </div>
            </div>
            <div className="max-w-[44.11125rem] mx-auto mt-6">
              <div className="border-l-[#4285F4] rounded-[15px] border-l-[15px] ">
                <div className="border-[#E1E1E1] rounded-l-[0px] rounded-r-[17px] border-l-[10px] border-[17px] p-6">
                  <p className="text-[1.5625rem] text-[#5F5F5F] font-[400] ">
                  A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="mt-7 justify-center items-center p-2 pt-0 ">
            <div className="max-w-[54.1875rem] mx-auto">
              <div className="m-15 items-center justify-center ">
                <div className="border-[#E1E1E1] rounded-[54px] border-[10px]">
                  <div className="flex items-center">
                    <div className="m-3 ml-10 justify-start">
                      <img src="/icons/vectoryellow.jpg" alt="" />
                    </div>
                    <div className="flex justify-start items-center m-3 ">
                      <h3 className="text-[2rem] text-[#5F5F5F] font-bold">
                        How is DSC related to Google?
                      </h3>
                    </div>
                  </div>
                  
                </div>
            </div>
            </div>
            <div className="max-w-[44.11125rem] mx-auto mt-6">
              <div className="border-l-[#F4B400] rounded-[15px] border-l-[15px] ">
                <div className="border-[#E1E1E1] rounded-l-[0px] rounded-r-[17px] border-l-[10px] border-[17px] p-6">
                  <p className="text-[1.5625rem] text-[#5F5F5F] font-[400] ">
                    A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="mt-7 justify-center items-center p-2 pt-0 ">
            <div className="max-w-[54.1875rem] mx-auto">
              <div className="m-15 items-center justify-center ">
                <div className="border-[#E1E1E1] rounded-[54px] border-[10px]">
                  <div className="flex items-center">
                    <div className="m-3 ml-10 justify-start">
                      <img src="/icons/vectorred.jpg" alt="" />
                    </div>
                    <div className="flex justify-start items-center m-3 ">
                      <h3 className="text-[2rem] text-[#5F5F5F] font-bold">
                        How to reach us?
                      </h3>
                    </div>
                  </div>
                  
                </div>
            </div>
            </div>
            <div className="max-w-[44.11125rem] mx-auto mt-6">
              <div className="border-l-[#DB4437] rounded-[15px] border-l-[15px] ">
                <div className="border-[#E1E1E1] rounded-l-[0px] rounded-r-[17px] border-l-[10px] border-[17px] p-6">
                  <p className="text-[1.5625rem] text-[#5F5F5F] font-[400] ">
                    Mail us at "dsc.rknec@gmail.com "
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </div>



    {/* footer */}



      <div className="max-w-[110.214375rem] mx-auto bg-[#ECECEC]">
        <div className="pt-5 pb-5 p-2">
        <div className="grid grid-cols-2">
          <div className="justify-center items-center border-r-[black] border-r-[1px]">
            <div className="flex-justify-center items-center mx-auto lg:pl-[3.75rem] lg:ml-[3.75rem]">
              <img src="/icons/footer1.png" className="bg-[#ECECEC]" alt="" />
            </div>
          </div>
          <div className="ml-3 p-3">
            <div className="flex justify-center items-center m-2">
              <div>
                <MapPin />
              </div>
              <div className="m-2 p-1">
                <h4 className="text-[1.125rem]">
                  Shri Ramdeobaba College of Engineering and Management, Ramdeo Tekdi, Gittikhadan,Katol Road,Nagpur- 440013
                </h4>
              </div>
            </div>
            <div className="flex justify-start items-center m-2">
              <div>
                <Mails />
              </div>
              <div className="m-2 p-1">
                <a className="text-[1.125rem]" href="">
                  dsc.rknec@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div>
          <img src="/icons/final.png" alt="" />
        </div>
      </div>


      </section>
    </div>  
    
       
   
  );
}
