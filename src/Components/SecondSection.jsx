import React from 'react';
import AboutLeft from '../Assets/images/image-about-dark.jpg';
import AboutRight from '../Assets/images/image-about-light.jpg';

export default function SecondSection() {
  return (
    <div className='w-full h-[300px]  flex lg:flex-col exl:flex-row  min-w-full lg:mt-6'>

      <div className="left w-[32%] lg:w-full lg:max-h-[480px] sm:min-h-[420px]">
          <img className='w-full h-full ' src={AboutLeft} alt="" />
      </div>

      <div className="middle w-[36%]  lg:w-full flex justify-center
       lg:justify-start md:justify-center items-center ">
          <div className="info_2 lg:m-10 lg:p-5 sm:p-2 p-7 w-[90%]">

            <h2 className='text-lg 3xl:text-[1.7rem] 3xl:tracking-[8px] 
            2xl:text-[18px] 2xl:tracking-[10px] xl:tracking-[8px] lg:text-3xl lg:mb-4 lg:mt-3
            md:text-[16px] sm:text-md uppercase font-[700] tracking-[8px] 
            lg:tracking-[8px] sm:tracking-[4px] mb-3'>
                About our furniture
            </h2>

            <p className=' exl:text-[1.1rem] 2xl:text-[0.8rem] lg:text-lg lg:pr-8 sm:pr-3 2xl:mt-2
            text-[16px] md:text-[15px] md:text-[16px] lg:max-w-[700px] md:max-w-[470px]  md:pr-0 text-dark-gray md:w-full'>
              Our multifunctional collection blends design and function to suit your individual taste.
              Make each room unique, or pick a cohesive theme that best express your interests and what
              inspires you. Find the furniture pieces you need, from traditional to contemporary styles
              or anything in between. Product specialists are available to help you create your dream space.
            </p>

          </div>
      </div>

      <div className="right w-[32%] lg:w-full lg:max-h-[400px] ">
          <img className='w-full h-full ' src={AboutRight} alt="" />
      </div>

    </div>
  )
}
