import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Navigation, Autoplay, Pagination } from 'swiper'
import Image from 'next/image'
import styles from './Carousel.module.scss'

export default function Carousel({ data, name }) {
   const serverUrl = 'https://image.tmdb.org/t/p/'
   const mapData = data.map((item, i) => {
      return (
         <SwiperSlide key={i} className={styles.Slide}>
            <Image
               src={`${serverUrl}/w500/${item.poster_path ? item.poster_path : item.backdrop_path}`}
               fill
               sizes=''
               priority
               alt=''
            />
            <div className={styles.SlideTitle}>
               <label className={styles.Name}>{item.title ? item.title : item.original_name}</label>

               <label className={styles.Release_date}>
                  {(item.release_date && item.release_date) ||
                     (item.first_air_date && item.first_air_date)}
               </label>

               <label className={styles.Vote}>{Math.round(item.vote_average * 10) / 10}</label>
            </div>
         </SwiperSlide>
      )
   })
   return (
      <Swiper
         modules={[Navigation]}
         navigation
         breakpoints={{
            300: {
               width: 300,
               slidesPerView: 1,
               spaceBetween: 20,
            },
            600: {
               width: 600,
               slidesPerView: 2,
               spaceBetween: 5,
            },
            1224: {
               width: 1224,
               slidesPerView: 5,
               spaceBetween: 20,
            },
         }}
         className={styles.Carousel}>
         <label className={styles.Title}>{name}</label>
         {mapData}
      </Swiper>
   )
}
