import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function SwiperPagination() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[500px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px]"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
