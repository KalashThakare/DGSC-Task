import { Navbar } from "@/components/navbar";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Knowus } from "@/components/knowus";
import { Technologies } from "@/components/technologies";

export default function Home() {
  return (
    <div className="font-sans justify-center items-center mx-auto mt-0 pt-0 bg-[]">
      <Navbar />
      <section className="font-sans m-1 p-1 justify-center items-center mx-auto">
      

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

      <div className="grid grid-rows-3 justify-center items-center m-2 p-2">
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


      <Knowus />


        <div className="mt-[21.875rem] mb-[21.875rem] mr-8 ml:8">
          <div className="grid grid-cols-4 gap-4 ">
            <div className="h-[16rem]">
              <div className="bg-[url('/icons/Group5.jpg')] bg-no-repeat bg-center w-full flex justify-center items-center bg-contain">
                <h3 className="flex font-bold text-[4.6875rem] text-center">
                  03+
                </h3>
              </div>
            </div>
            <div className="h-[16rem]">
              <div className="bg-[url('/icons/Group5.jpg')] bg-no-repeat bg-center w-full flex justify-center items-center bg-contain">
                <h3 className="flex justify-center items-center font-bold text-[4.6875rem] text-center">
                  10+
                </h3>
              </div>
            </div>
            <div className="h-[16rem]">
              <div className="bg-[url('/icons/Group5.jpg')] bg-no-repeat bg-center w-full flex justify-center items-center bg-contain">
                <h3 className="flex justify-center items-center font-bold text-[4.6875rem] text-center">
                  1K+
                </h3>
              </div>
            </div>
            <div className="h-[16rem]">
              <div className="bg-[url('/icons/Group5.jpg')] bg-no-repeat bg-center w-full flex justify-center items-center bg-contain ">
                <h3 className="flex justify-center items-center font-bold text-[4.6875rem] text-center">
                  200+
                </h3>
              </div>
            </div>
          </div>
        </div>
      

      <div>
        <div className="grid grid-cols-1 xl:grid-cols-3 ">
          <div className="flex justify-center items-center m-3">
            <div className="border-[#FF6060] border-[0.375rem] w-full">
            </div>
          </div>
          <div className="text-[#5F5F5F] font-bold md:text-[4.375rem] text-[3rem] flex justify-center items-center">
            Technologies
          </div>
          <div className="flex justify-center items-center m-3">
            <div className="border-[#FF6060] border-[6px] w-full">
            </div>
          </div>
        </div>
        <div className="p-10 pt-0">
          <div className="flex justify-center items-center">
            <h3 className="text-[#5F5F5F] text-[32px] font-[400] text-center">
              Domains That Excite Us to Collaborate and Teach!
            </h3>
          </div>
        </div>
      </div>

      <Technologies />

      <Faq />



    {/* footer */}



      <Footer />


      </section>
    </div>  
    
       
   
  );
}
