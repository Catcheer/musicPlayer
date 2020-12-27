import React,{useEffect,useState} from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/swiper.scss';

function Banner(){

console.log('banner')
    return <Swiper
    spaceBetween={0}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide className="swiper_slide">
        <img className="img" src={require('@images/1.jpeg')} alt=""/>
    </SwiperSlide>
    <SwiperSlide className="swiper_slide">
      <img className="img" src={require('@images/2.jpeg')} alt=""/>
    </SwiperSlide>
    <SwiperSlide className="swiper_slide">Slide 3</SwiperSlide>
    <SwiperSlide className="swiper_slide">Slide 4</SwiperSlide>
  </Swiper>
}

export default React.memo(Banner)