import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import styles from './Carousel.module.scss'
import { Slide } from './Slide.module.scss'
import Slider from './Slide'
import { isMobile } from 'react-device-detect'

export default function Carousel({ children, name, data, noWidth, className, slides, noNav }) {
   const handleChildren = children ? true : false
   return (
      <Swiper
         spaceBetween={10}
         modules={[Navigation]}
         navigation={noNav ? false : true}
         className={`${styles.Carousel} ${className}`}
         breakpoints={{
            300: {
               slidesPerView: slides ? slides : 2,
            },
            620: {
               slidesPerView: slides ? slides : 3,
            },
            1000: {
               slidesPerView: slides ? slides : 5,
            },
         }}>
         <label className={styles.Title}>{name}</label>
         {handleChildren
            ? children
            : data?.map((item, i) => {
                 return (
                    <SwiperSlide key={i} className={Slide}>
                       <Slider item={item} />
                    </SwiperSlide>
                 )
              })}
      </Swiper>
   )
}
