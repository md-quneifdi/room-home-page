import React from 'react';
import Arrow from '../Assets/images/icon-arrow.svg';

export default function FirstSlide() {
  return (
     <div className='flex w-full h-[68vh] min-w-full 2xl:h-[68vh] lg:h-[78vh] md:h-[100vh]
      lg:flex-col'>
      <div className="left w-[55%] bg-first-desktop bg-no-repeat bg-cover bg-center
        lg:bg-top md:bg-center
        lg:w-full md:bg-first-mobile lg:min-h-[58%] md:flex
      ">
      </div>
      <div className="right bg-white w-[45%] flex justify-center items-center
       3xl:p-32 2xl:p-28 lg:p-24 lg:w-full lg:min-h-[70%] md:px-11 md:py-24  
      ">
          <div className="info ">
              <h2 className='
                3xl:text-5xl 2xl:text-[2.7rem] xl:text-3xl  
                font-[700] leading-[1] lg:text-5xl lg:pt-10 
                md:text-[2rem] sm:text-[2.4rem]
                sm:leading-[1.2] sm:p-0
                sm:truncate
              '>
                Discover innovative <br/> ways to decorate
              </h2>
              <p className='py-6 md:py-4 sm:py-6 text-dark-gray pr-1 lg:text-xl
              text-[18px] 3xl:text-xl xl:text-lg lg:pr-5 lg:text-md md:pr-2'>
                  We provide unmatched quality, comfort,
                  and style for property owners across the country. 
                  Our experts combine form and function in bringing your vision to life.
                  Create a room in your own style with our collection and make
                  your property a reflection of you and what you love.
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
