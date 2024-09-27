import React from 'react'
import Link from 'next/link'
import { ToggleLeft } from 'lucide-react'

export const Navbar = () => {
  return (
    <div className='flex justify-center items-center sticky z-[100] backdrop-blur-lg shadow  h-[100px] blur-4'>
        <div className='cntainer mx-auto flex justify-between items-center'>

            <div className='flex ml-10 h-[21px] top-[33px] left-[135px] font-Product text-[#868686] text-[25px] justify-center items-center'>
                <h1 className='flex justify-center items-ceter'>
                    <div className='w-[75px] h-[34.64px]'>
                        <img src="/icons/gdg.png" alt="" />
                    </div>
                    GDGC RCOEM
                </h1>
            </div>

            <nav className='flex items-center justify-end h-[39px]  top-[29px] gap-8 lg:text-[29px] text-[#868686]'>
            
                    <a href="">Home</a>
                    <a href="">Events</a>
                    <a href="">Team</a>
                    <a href="">Alumini</a>
                    <a href="">Contact</a>
                    <div className='w-[90px] h-[36px] rounded-[131.5px] bg-[#7A7A7A] left-[1318px]'>
                        <div className='flex justify-center w-[19.01px] h-[19.6px] top-[40px] left-[1327px] bg-white items-center rounded-full'>

                        </div>
                    </div>
                
            </nav>


        </div>

    </div>
    
  )
}
