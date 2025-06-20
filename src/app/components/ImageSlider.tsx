"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/ImageSlider.css";

interface ImageSliderProps {
  images: string[];
  alt: string;
}

const ImageSlider = ({ images, alt } : ImageSliderProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      className="h-48 sm:h-52 md:h-56"
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <Image
            src={src}
            alt={`${alt} ${idx + 1}`}
            width={400}
            height={192}
            className="w-full h-48 sm:h-52 md:h-56 object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;