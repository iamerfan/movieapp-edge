import Carousel from 'components/HomePage/Carousel'
import { SwiperSlide } from 'swiper/react'
import styles from '../Title.module.scss'
import { Slide } from '../../HomePage/Slide.module.scss'
import { ImagesCarousel } from '../../HomePage/Carousel.module.scss'
import ImageSlider from './ImageSlider'
import { useEffect, useState } from 'react'
import Switches from './Switches'

export default function Images({ data }) {
   const [arry, setArry] = useState([...data.posters])
   const [index, setIndex] = useState(0)

   const handleSwitch = i => {
      if (i === index) return
      setIndex(i)
   }

   useEffect(() => {
      if (index === 0) return setArry([...data.posters])
      if (index === 1) return setArry([...data.backdrops])
      if (index === 2) return setArry([...data.logos])
   }, [index])

   const switches = [
      { name: 'Posters', index: 0 },
      { name: 'Backdrops', index: 1 },
      { name: 'Logos', index: 2 },
   ]
   return (
      <div className={styles.Container}>
         <div className={styles.Name}>Pictures</div>
         <Switches switches={switches} index={index} handleSwitch={handleSwitch}></Switches>
         <Carousel className={ImagesCarousel}>
            {arry.map((item, i) => {
               if (i > 10) return
               return (
                  <SwiperSlide key={i} className={Slide}>
                     <ImageSlider item={item} />
                  </SwiperSlide>
               )
            })}
         </Carousel>
      </div>
   )
}
