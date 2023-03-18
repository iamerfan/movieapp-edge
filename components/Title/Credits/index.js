import Carousel from 'components/HomePage/Carousel'
import { SwiperSlide } from 'swiper/react'
import styles from '../Title.module.scss'
import { Slide, CreditSlide } from '../../HomePage/Slide.module.scss'
import { ImagesCarousel } from '../../HomePage/Carousel.module.scss'
import { useEffect, useState } from 'react'
import Switches from '../Images/Switches'
import CreditsSlider from './CreditsSlider'

export default function Credits({ data }) {
   const [arry, setArry] = useState([...data.cast])
   const [index, setIndex] = useState(0)

   const handleSwitch = i => {
      if (i === index) return
      setIndex(i)
   }

   useEffect(() => {
      if (index === 0) return setArry([...data.cast])
      if (index === 1) return setArry([...data.crew])
   }, [index])
   const switches = [
      { name: 'Cast', index: 0 },
      { name: 'Crew', index: 1 },
   ]
   return (
      <div className={styles.Container}>
         <div className={styles.Name}>Credits</div>
         <Switches switches={switches} index={index} handleSwitch={handleSwitch}></Switches>
         <Carousel className={ImagesCarousel}>
            {arry.map((item, i) => {
               if (i > 10) return
               if (!item.profile_path) return
               return (
                  <SwiperSlide key={i} className={`${Slide} ${CreditSlide}`}>
                     <CreditsSlider item={item} />
                  </SwiperSlide>
               )
            })}
         </Carousel>
      </div>
   )
}
