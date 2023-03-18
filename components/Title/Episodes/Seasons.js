import Carousel from 'components/HomePage/Carousel'
import { SwiperSlide } from 'swiper/react'
import { SeasonsCarousel } from '../../HomePage/Carousel.module.scss'
import styles from '../Title.module.scss'

export default function Seasons(props) {
   return (
      <div className={styles.Seasons}>
         <Carousel className={SeasonsCarousel} noNav>
            {props.data?.map((item, i) => {
               return (
                  <SwiperSlide key={i} className={styles.SeasonSlide}>
                     <div
                        className={`${styles.Season} ${i === props.activeIndex && styles.Active}`}
                        onClick={() => props.handleClick(i)}>
                        {item.name}
                     </div>
                  </SwiperSlide>
               )
            })}
         </Carousel>
      </div>
   )
}
