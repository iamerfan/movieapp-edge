import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import axios from 'axios'
import { ImagesCarousel } from 'components/HomePage/Carousel.module.scss'
import { Slide, CreditSlide } from 'components/HomePage/Slide.module.scss'

import styles from 'components/Episode/Episode.module.scss'
import { server } from 'libs/config'
import Image from 'next/image'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from 'components/HomePage/Loading'
import Carousel from 'components/HomePage/Carousel'
import { SwiperSlide } from 'swiper/react'
import CreditsSlider from 'components/Title/Credits/CreditsSlider'
import { useRouter } from 'next/router'

export default function Episode({ data, seriesName }) {
   const router = useRouter()
   const { slug } = router.query
   const serverUrl = 'https://image.tmdb.org/t/p/original'
   const [loading, setLoading] = useState(true)
   const [activeSwitch, setActiveSwitch] = useState('guest')
   const [crewOrGuset, setCrewOrGuest] = useState(data.guest_stars)
   const imgUrl = `/img${data.still_path}`
   useEffect(() => {
      setLoading(true)
   }, [data.still_path])
   const handleSwitch = i => {
      if (activeSwitch !== i) {
         setActiveSwitch(i)
         setCrewOrGuest(i === 'crew' ? data.crew : data.guest_stars)
      }
   }
   const handleNextAndPrev = i => {
      if (i === 'Next') {
         slug[2] = Number(slug[2]) + 1
      }
      if (i === 'Prev') {
         slug[2] = Number(slug[2]) - 1
      }
      return router.push({ query: { slug } })
   }

   return (
      <div className={styles.EpisodeContainer}>
         <div className={styles.Main}>
            {loading && <Loading />}
            <Image
               src={imgUrl}
               fill
               onLoadStart={() => setLoading(true)}
               onLoadingComplete={() => setLoading(false)}
               sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              100vw'
               priority
               alt=''
            />
            <button
               className={styles.Next}
               disabled={data.episode_number < data.seasonData.episodes?.length ? false : true}
               onClick={() => handleNextAndPrev('Next')}>
               <label>Next Episode</label>
               <ChevronRightIcon />
            </button>
            <button
               className={styles.Prev}
               disabled={data.episode_number > 1 ? false : true}
               onClick={() => handleNextAndPrev('Prev')}>
               <ChevronLeftIcon />
               <label>Previos Episode</label>
            </button>
            <div className={styles.Name}>
               <div className={styles.EpisodeAndSeason}>
                  <div>Episode {data.episode_number}</div>
                  <div>Season {data.season_number} </div>
               </div>
               <label>{data.name}</label>
               <div className={styles.overview}>{data.overview}</div>
            </div>
         </div>
         <div className={styles.Details}>
            {slug[3] && (
               <div className={styles.TitleContainer}>
                  <label className={styles.Title}>Series Title : </label>
                  <label className={styles.Data}>{slug[3]} </label>
               </div>
            )}
            <div className={styles.TitleContainer}>
               <label className={styles.Title}>Episode Air Date : </label>
               <label className={styles.Data}>{data.air_date} </label>
            </div>
            <div className={styles.TitleContainer}>
               <label className={styles.Title}>Episode Runtime : </label>
               <label className={styles.Data}>{data.runtime} minutes</label>
            </div>
            <div className={`${styles.TitleContainer} ${styles.Carousel}`}>
               <div className={styles.Switches}>
                  <button
                     className={activeSwitch === 'guest' && styles.Active}
                     onClick={() => handleSwitch('guest')}>
                     Guest Stars
                  </button>
                  <button
                     className={activeSwitch === 'crew' && styles.Active}
                     onClick={() => handleSwitch('crew')}>
                     Crew
                  </button>
               </div>
               <Carousel slides={3} className={ImagesCarousel}>
                  {crewOrGuset.map((item, i) => {
                     if (!item.profile_path) return
                     return (
                        <SwiperSlide key={i} className={`${Slide} ${CreditSlide}`}>
                           <CreditsSlider item={item} />
                        </SwiperSlide>
                     )
                  })}
               </Carousel>
            </div>
         </div>
      </div>
   )
}
export const getServerSideProps = async ({ query }) => {
   const { slug } = query
   const url = `${server}/api/edge/episode/${slug.join('/')}`
   if (!slug[0] || !slug[1] || !slug[2])
      return {
         redirect: {
            permanent: false,
            destination: `/`,
         },
         props: {},
      }
  const data = await fetch(url).then((res) => res.json());
  return { props: { data } };
}
