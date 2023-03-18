import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './Slide.module.scss'
import Slide from './Slide'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { isMobile } from 'react-device-detect'
import BigSlide from './BigSlide'

export default function HomeCarousel({ data }) {
   const bp = {
      300: {
         width: 300,
         centeredSlides: true,
      },
      600: {
         width: 600,
         centeredSlides: true,
      },
      1224: {
         width: 1224,
         centeredSlides: false,
         pagination: { clickable: true },
      },
   }
   return (
      <Swiper
         modules={[Navigation, Autoplay, Pagination]}
         pagination={{ clickable: true }}
         autoplay={{ delay: 5000 }}
         slidesPerView={2}
         centeredSlides={true}
         breakpoints={{
            320: {
               spaceBetween: 10,
            },
            1000: {
               slidesPerView: 2,

               spaceBetween: 150,
            },
         }}
         className='HomeSwiper'>
         {data.map((item, i) => {
            return (
               <SwiperSlide key={i} className={'testSlide'}>
                  <BigSlide key={i} item={item} />
               </SwiperSlide>
            )
         })}
      </Swiper>
   )
}
