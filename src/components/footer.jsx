import React from 'react'
import {MapPin,Mails} from "lucide-react";

export const Footer = () => {
  return (
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
  )
}
