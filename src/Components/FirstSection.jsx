import React, { useState } from 'react';
// import SliderSection from './SliderSection';
// import Slider from './Slider';
import RightArrow from '../Assets/images/icon-angle-right.svg';
import LeftArrow from '../Assets/images/icon-angle-left.svg';
import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';

export default function FirstSection() {

  const [count, setCount] = useState(0);

  const nextSlide = () => {
    setCount(count + 1)
  }

  const prevSlide = () => {
    setCount(count - 1)
  }

  const handleSlides = () => {
    if (count === 0) {
      return (
        <FirstSlide />
      )
    }else if (count === 1) {
      return (
        <SecondSlide />
      )
    }else if (count === 2) {
      return (
        <ThirdSlide />
      )
    }
  }

  return (
    <div className="w-full relative transition-[0.5s]">

      {
        handleSlides()
      }

      {/* Buttons Section */}
      <div className="btns w-[13%] h-[70px] lg:w-[25%] sm:w-[20%] sm:h-[60px] bg-black
      flex justify-around items-center absolute bottom-0 left-[55%]
       lg:bottom-[42.1%] lg:left-[75%] sm:bottom-[42.2%] sm:right-[0]">
       <button 
       className="left bg-black hover:bg-dark-gray transition-[0.7s]
        w-full h-full flex justify-center items-center p-8 sm:relative"
       onClick={() => prevSlide()}
       disabled={count === 0} >
        <img className='sm:w-4 sm:h-6  sm:absolute sm:top-[28%] 
        sm:left-[35%]' src={LeftArrow} alt="" />
      </button>

      <button 
      className="right bg-black w-full hover:bg-dark-gray transition-[0.7s]
       h-full flex justify-center items-center p-8 sm:relative"
      onClick={() => nextSlide()}
      disabled={count === 2}>
        <img className='sm:w-4 sm:h-6  sm:absolute sm:top-[28%] 
        sm:left-[35%]' src={RightArrow} alt="" />
      </button>

    </div>
    </div>
  )
}
