import React from 'react';
import Arrow from '../Assets/images/icon-arrow.svg';

export default function ThirdSlide() {
  return (
      <div className='flex w-full h-[68vh] min-w-full 2xl:h-[68vh] lg:h-[78vh] md:h-[100vh] there
      lg:flex-col'>
      <div className="left w-[55%] bg-third-desktop bg-no-repeat bg-cover bg-center
        lg:w-full md:bg-third-mobile lg:min-h-[58%] md:flex">
      </div>
      <div className="right bg-white w-[45%] flex justify-center items-center
       3xl:p-32 2xl:p-28 lg:p-24 lg:w-full lg:min-h-[70%] md:px-11 md:py-24 ">
          <div className="info ">
              <h2 className='
                3xl:text-5xl 2xl:text-[2.7rem] xl:text-3xl  
                font-[700] leading-[1] lg:text-5xl lg:pt-10 
                md:text-[2rem] sm:text-[2.4rem]
                sm:leading-[1.2] sm:px-0 sm:pt-8
                sm:truncate'>
                 Manufactured with <br/> the best materials
              </h2>
              <p className='py-6 md:py-4 text-dark-gray pr-1
              text-[18px] 3xl:text-xl xl:text-lg lg:text-xl lg:pr-5 lg:text-md md:pr-2'>
                Our modern furniture store provide a high level of quality
                Our company has invested in advanced technology 
                to ensure that every product is made as perfect and as consistent as possible.
                With three decades of experience in this industry,
                we understand what customers want for their home and office.
              </p>
              <button className='
                flex justify-center items-center text-xl xl:text-base 3xl:text-[1.5rem] lg:text-xl
                uppercase font-[600] tracking-[12px] hover:text-dark-gray 
                transition-[0.5s] hover:opacity-50 md:pb-3
              '>
                  Shop now  
                  <span className='ml-2 font-[700]'>
                      <img className='text-2xl  h-4 mb-1 3xl:h-[1.1rem] xl:h-[0.9rem]' src={Arrow} alt="" />
                  </span> 
              </button>
          </div>
      </div>
    </div>
  )
}
