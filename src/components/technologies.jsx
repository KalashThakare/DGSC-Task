import React from 'react'

export const Technologies = () => {
  return (
    <div className='p-2 mt-[15rem] mb-[15rem]'>
        <div className='grid md:grid-rows-3 md:grid-cols-1 xl:grid-cols-3 xl:grid-rows-1 sm:grid-rows-3 sm:grid-cols-1 gap-20'>
            <div className='relative'>
                <div className='flex justify-center items-center mx-auto'>
                    <div className='bg-[#EA4335] w-[241px] h-[11px] rounded-[26px]'/>
                </div>
                <div className='border-[#E1E1E1] rounded-[32px] border-[10px] h-[281.75px] w-[426px] bg-[#FFFFFF] mx-auto shadow-[0_4px_50px_0px_rgba(0,0,0,0.25)] blur-[50]'>
                    <div className='flex justify-center items-center absolute top-0 transform translate-x-1/3 pl-2'>
                        <img src="/icons/t1.png" alt="" /> 
                    </div>
                    <div className='text-[#5F5F5F] justify-center text-center h-[34.5px] w-[200.59px] mx-auto font-[400] text-[48px] absolute top-[11rem] transform translate-x-1/2'>
                            Android
                    </div>
                    <div className='flex justify-center items-center absolute top-[16rem] transform translate-x-[12rem]'>
                        <img src="/icons/vector.png" alt="" />
                    </div>
                    
                </div>
            </div>
            <div className='relative'>
                <div className='flex justify-center items-center mx-auto'>
                    <div className='bg-[#4285F4] w-[241px] h-[11px] rounded-[26px]'/>
                </div>
                <div className='border-[#E1E1E1] rounded-[32px] border-[10px] h-[281.75px] w-[426px] bg-[#FFFFFF] mx-auto shadow-[0_4px_50px_0px_rgba(0,0,0,0.25)] blur-[50]'>
                    <div className='flex justify-center items-center absolute top-[4rem] transform translate-x-[7rem] pl-2'>
                        <img src="/icons/t2.png" alt="" /> 
                    </div>
                    <div className='text-[#5F5F5F] justify-center text-center h-[34.5px] w-[200.59px] mx-auto font-[400] text-[48px] absolute top-[11rem] transform translate-x-1/2'>
                            Flutter
                    </div>
                    <div className='flex justify-center items-center absolute top-[16rem] transform translate-x-[12rem]'>
                        <img src="/icons/vector.png" alt="" />
                    </div>
                    
                </div>
            </div>
            <div className='relative'>
                <div className='flex justify-center items-center mx-auto'>
                    <div className='bg-[#34A853] w-[241px] h-[11px] rounded-[26px]'/>
                </div>
                <div className='border-[#E1E1E1] rounded-[32px] border-[10px] h-[281.75px] w-[426px] bg-[#FFFFFF] mx-auto shadow-[0_4px_50px_0px_rgba(0,0,0,0.25)] blur-[50]'>
                    <div className='flex justify-center items-center absolute top-8 transform translate-x-[6.5rem] pl-2'>
                        <img src="/icons/t3.png" alt="" /> 
                    </div>
                    <div className='text-[#5F5F5F] justify-center text-center h-[34.5px] w-[200.59px] mx-auto font-[400] text-[48px] absolute top-[11rem] transform translate-x-1/2'>
                            Cloud
                    </div>
                    <div className='flex justify-center items-center absolute top-[16rem] transform translate-x-[12rem]'>
                        <img src="/icons/vector.png" alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
