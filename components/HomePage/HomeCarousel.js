import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Navigation, Autoplay } from 'swiper'
import { motion } from 'framer-motion'
import Image from 'next/image'
const IMG_URI = process.env.IMG_URI

export default function HomeCarousel({ data }) {
   const serverUrl = 'https://image.tmdb.org/t/p/'

   return (
      <Swiper
         navigation={true}
         modules={[Navigation, Autoplay]}
         breakpoints={{
            300: {
               width: 300,
               slidesPerView: 1,
               centeredSlides: false,
            },
            1224: {
               width: 1224,
               slidesPerView: 2,
               centeredSlides: true,
            },
         }}
         autoplay
         className='HomeSwiper'>
         {data.map((item, i) => {
            return (
               <SwiperSlide key={i} className='Slide'>
                  <Image
                     src={`${serverUrl}/w500/${
                        item.poster_path ? item.poster_path : item.backdrop_path
                     }`}
                     fill
                     sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
                     priority
                     alt=''
                  />
                  <div className='SlideTitle'>
                     <label className='title'>
                        {item.title ? item.title : item.original_name}
                        <div className='divider'></div>
                     </label>
                     <label className='releaseDate'>
                        {(item.release_date && item.release_date) ||
                           (item.first_air_date && item.first_air_date)}
                     </label>
                     <label className='vote'>{Math.round(item.vote_average * 10) / 10}</label>
                     <label className='overview '>{item.overview}</label>
                  </div>
               </SwiperSlide>
            )
         })}
      </Swiper>
   )
}
