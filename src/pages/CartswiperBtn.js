import React from 'react'
import { useSwiper } from 'swiper/react'
import './Cartswiper.css'
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from "react-icons/gr";

export const CartswiperBtn = () => {
    const swiper = useSwiper();
  return (
    <>
    <div className='Btn-group'>
    <button className='s-btn' onClick={()=>swiper.slidePrev()}><GrFormPrevious /></button>
    <button className='s-btn' onClick={()=>swiper.slideNext()}><MdNavigateNext /></button>
   

    </div>
    </>
  )
}