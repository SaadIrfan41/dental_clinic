'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.scss'
// import 'swiper/components/navigation/navigation.scss'
// import 'swiper/components/pagination/pagination.scss'
// import 'swiper/components/effect-flip/effect-flip.scss'
// import 'swiper/components/scrollbar/scrollbar.scss'
import LocationImage1 from '../../public/location1.jpg'
import LocationImage2 from '../../public/location2.jpg'
import LocationImage3 from '../../public/location3.jpg'
import LocationImage4 from '../../public/location4.jpg'
import LocationImage5 from '../../public/location5.jpg'
import { Autoplay, Pagination, Navigation } from 'swiper'
import Image from 'next/image'
const Carousel = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      speed={500}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      touchRatio={1.5}
      effect={'flip'}
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true }}
      className='mySwiper'
    >
      <SwiperSlide>
        <Image
          src={LocationImage1}
          alt='Office Image'
          className='max-h-[670px] object-cover'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={LocationImage2}
          alt='Office Image'
          className='max-h-[670px] object-cover'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={LocationImage3}
          alt='Office Image'
          className='max-h-[670px] object-cover'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={LocationImage4}
          alt='Office Image'
          className='max-h-[670px] object-cover'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={LocationImage5}
          alt='Office Image'
          className='max-h-[670px] object-cover'
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default Carousel
