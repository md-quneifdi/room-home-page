import React, { useState } from 'react';
import Logo from '../Assets/images/logo.svg';
import BurgerIcon from '../Assets/images/icon-hamburger.svg';
import CloseIcon from '../Assets/images/icon-close.svg';

export default function Navbar() {

  const [toggleIcon, setToggleIcon] = useState(false);

  const toggledIcon = () => {
    setToggleIcon(!toggleIcon);
  }

  return (
    <div className={toggleIcon ? `
     flex justify-start items-center w-[60%] text-white p-[40px] ml-[7%]
     absolute top-[35px] z-[1000] md:bg-white lg:w-[90%] md:w-[90%] sm:w-[90%] es:w-[97%] sm:-left-5
     
    `
    :
     `
     flex justify-start items-center w-[60%] text-white p-[40px] ml-[4%]
     absolute 3xl:top-[33px] z-[1000] 
    `
  }>
      {/* <h2 className="logo text-4xl font-[600] ">room</h2> */}
      <div className='w-[90px] 3xl:w-[100px] md:hidden'>
          <img className='w-full' src={Logo} alt="" />
      </div>

      <div 
        className={`w-[40px] 3xl:hidden md:flex pointer sm:absolute
         sm:top-[${toggleIcon ? '5' : '2'}] sm:left-1 sm:w-[30px]

        `}
        onClick={() => toggledIcon()}
      >
          <img className='w-full h-full' src={toggleIcon ? CloseIcon : BurgerIcon} alt="" />
      </div>

      <ul 
      className={toggleIcon ? `flex grow  items-center ml-[3.5rem] sm:ml-[2rem] es:ml-[1.1rem]
        list-none transition-[0.7s]
        text-[1.7rem] text-white cursor-pointer pt-2 space-x-8 md:space-x-10 sm:space-x-6  
        md:flex md:text-black sm:justify-center md:text-[1.7rem] sm:text-[1.3rem] sm:absolute 
        `
      :
      `flex grow  items-center ml-[3.5rem] list-none transition-[0.5s]
        text-xl 3xl:text-2xl 2xl:text-xl text-white cursor-pointer pt-2 space-x-8 md:hidden `
    }>
          
          <li className='relative hover:after:content-[""]
           hover:after:absolute hover:after:w-[50%] hover:after:h-[3px] 
           hover:after:top-[35px] hover:after:left-[23%] 
           hover:after:bg-white hover:after:rounded-md 
           hover:lg:after:top-[38px] hover:md:after:bg-black
           hover:sm:after:top-[34px]'>home</li>

          <li  className='relative hover:after:content-[""]
           hover:after:absolute hover:after:w-[50%] hover:after:h-[3px] 
           hover:after:top-[35px] hover:after:left-[23%] 
           hover:after:bg-white hover:after:rounded-md
           hover:lg:after:top-[38px] hover:md:after:bg-black
           hover:sm:after:top-[34px]'>shop</li>

          <li  className='relative hover:after:content-[""]
           hover:after:absolute hover:after:w-[50%] hover:after:h-[3px] 
           hover:after:top-[35px] hover:after:left-[23%] 
           hover:after:bg-white hover:after:rounded-md
           hover:lg:after:top-[38px] hover:md:after:bg-black
           hover:sm:after:top-[34px]'>about</li>

          <li  className='relative hover:after:content-[""]
           hover:after:absolute hover:after:w-[50%] hover:after:h-[3px] 
           hover:after:top-[35px] hover:after:left-[20%] 
           hover:after:bg-white hover:after:rounded-md
           hover:lg:after:top-[38px] hover:md:after:bg-black
           hover:sm:after:top-[34px]'>contact</li>

      </ul>
    </div>
  )
}
