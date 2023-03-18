import styles from './Details.module.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import SwiperCore, { Navigation } from 'swiper/core'
import { useRouter } from 'next/router'
// install Swiper modules
SwiperCore.use([Navigation])
export default function Genres({ data }) {
   const router = useRouter()
   const type = router.query.slug[0]
   const handleClick = id => {
      router.push(`/genres/${type}/${id}`)
   }
   return (
      <Swiper className={styles.GenreSwiper} slidesPerView={1} spaceBetween={5}>
         {data.map((item, i) => {
            return (
               <SwiperSlide key={i} onClick={() => handleClick(item.id)} className={styles.Genre}>
                  {item.name}
               </SwiperSlide>
            )
         })}
      </Swiper>
   )
}
