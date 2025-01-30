'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from "@heroui/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Documentation = () => {
  const progressContent = useRef<HTMLSpanElement>(null);
  const progressCircle = useRef<HTMLDivElement>(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', (1 - progress).toString());
    }

    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  return (
    <div className="w-4/5">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/photo2.jpg" alt="Photo 2" className="aspect-video object-cover rounded-medium" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/photo1.jpg" alt="Photo 1" className="aspect-video object-cover rounded-medium" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/photo3.jpg" alt="Photo 3" className="aspect-video object-cover rounded-medium" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/photo4.jpg" alt="Photo 4" className="aspect-video object-cover rounded-medium" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};