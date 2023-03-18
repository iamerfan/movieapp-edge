import Carousel from 'components/HomePage/Carousel'
import { SwiperSlide } from 'swiper/react'
import styles from '../Title.module.scss'
import { ReviewCarousel } from '../../HomePage/Carousel.module.scss'
import { Slide, Big } from '../../HomePage/Slide.module.scss'
import Review from './Review'

export default function Reviews({ data }) {
   return (
      <div className={styles.Container}>
         <div className={styles.Name}>Reviews</div>
         <Carousel slides={1} className={ReviewCarousel}>
            {data.results.map((item, i) => {
               return (
                  <SwiperSlide
                     key={i}
                     className={`${Slide}`}
                     style={{ minWidth: '98%', marginRight: '0' }}>
                     <Review item={item} />
                  </SwiperSlide>
               )
            })}
         </Carousel>
         {data.results.length === 0 && (
            <h1 className={styles.Empty}>Oops There is No Reviews Yet</h1>
         )}
      </div>
   )
}
