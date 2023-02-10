import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import Image from 'next/image'
import styles from './Carousel.module.scss'
import SmallSlide from './SmallSlide'

export default function Carousel({ data, name }) {
   const mapData = data.map((item, i) => {
      return (
         <SwiperSlide className={styles.Slide} key={i}>
            <SmallSlide item={item} />
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
