import styles from './Genres.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRouter } from 'next/router'
import 'swiper/css/navigation'
import 'swiper/css'

export default function GenresPanel({ data }) {
   const router = useRouter()
   const { slug } = router.query
   const id = Number(slug[1])
   const activeItem = data.find(item => item.id === id)

   const handleClick = i => {
      slug[1] = i
      router.push({ query: { slug } })
   }

   return (
      <div className={styles.GenresContainer}>
         <Swiper
            spaceBetween={40}
            breakpoints={{
               300: {
                  slidesPerView: 3,
               },
               1000: {
                  slidesPerView: 7,
               },
            }}>
            {/* active Item at the Begining of the list (not Clickable) */}
            <SwiperSlide className={`${styles.Genre} ${styles.active}`}>
               {activeItem.name}
            </SwiperSlide>

            {/* Rest of the Genre List (clickable) */}
            {data.map((item, i) => {
               if (activeItem.id === item.id) return
               return (
                  <SwiperSlide
                     key={i}
                     onClick={() => handleClick(item.id)}
                     className={styles.Genre}>
                     {item.name}
                  </SwiperSlide>
               )
            })}
         </Swiper>
      </div>
   )
}
