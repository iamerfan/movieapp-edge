import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FilmIcon, TvIcon } from '@heroicons/react/24/outline'
import { StarIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Switch from './Switch'
import BigSlide from './BigSlide'

export default function HomeCarousel({ data }) {
   const serverUrl = 'https://image.tmdb.org/t/p/'

   const bp = {
      300: {
         width: 300,
         slidesPerView: 1,
         centeredSlides: true,
      },
      600: {
         width: 600,
         slidesPerView: 1,
         centeredSlides: true,
      },
      1224: {
         width: 1224,
         slidesPerView: 2,
         centeredSlides: false,
         pagination: { clickable: true },
      },
   }
   const mapData = data.map((item, i) => {
      return (
         <SwiperSlide key={i} className='Slide'>
            <BigSlide item={item} />
         </SwiperSlide>
      )
   })
   return (
      <Swiper
         modules={[Navigation, Autoplay, Pagination]}
         navigation
         breakpoints={bp}
         pagination
         autoplay
         className='HomeSwiper'>
         {mapData}
      </Swiper>
   )
}
