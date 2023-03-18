import Carousel from 'components/HomePage/Carousel'
import { useState, useRef } from 'react'
import { SwiperSlide } from 'swiper/react'
import styles from '../Title.module.scss'
import { Slide } from '../../HomePage/Slide.module.scss'
import { EpisodesCarousel } from '../../HomePage/Carousel.module.scss'
import EpisodeSlider from './EpisodeSlider'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Seasons from './Seasons'

export default function Episodes({ data, season, seriesName }) {
   //check if media Type is movie
   const router = useRouter()
   const { slug } = router.query
   const mediaType = slug[0]
   const Season_Query = slug[2]
   if (mediaType === 'movie') return

   const seasonRef = useRef()
   const [activeIndex, setActiveIndex] = useState(Season_Query ? Number(Season_Query) : 0)

   const handleClick = i => {
      if (i === activeIndex) return
      setActiveIndex(i)
      const newSlug = [...slug]
      newSlug[2] = i
      router.push({ query: { slug: [...newSlug] } })
   }
   useEffect(() => {
      if (Season_Query) seasonRef.current.scrollIntoView()
   }, [Season_Query])

   return (
      <div className={styles.Container} ref={seasonRef}>
         <div className={styles.Name}>Seasons And Episodes</div>
         <Seasons data={data} activeIndex={activeIndex} handleClick={handleClick} />
         <Carousel className={EpisodesCarousel}>
            {season?.episodes?.map((item, i) => {
               return (
                  <SwiperSlide key={i} className={Slide}>
                     <EpisodeSlider seriesName={seriesName} item={item} />
                  </SwiperSlide>
               )
            })}
         </Carousel>
      </div>
   )
}
