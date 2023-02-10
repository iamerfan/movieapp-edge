import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './Carousel.module.scss'
import Loading from './Loading'
const serverUrl = 'https://image.tmdb.org/t/p/'

export default function SmallSlide({ item }) {
   const query = useRouter.query
   const [loading, setLoading] = useState(true)
   const imgUrl = `${serverUrl}/w500/${item.poster_path ? item.poster_path : item.backdrop_path}`

   useEffect(() => {
      setLoading(true)
   }, [item.poster_path, item.backdrop_path])

   return (
      <>
         <Image
            src={imgUrl}
            fill
            onLoadStart={() => setLoading(true)}
            onLoadingComplete={() => setLoading(false)}
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            priority
            alt=''
         />
         {loading && <Loading />}
         <div className={styles.SlideTitle}>
            <label className={styles.Name}>{item.title ? item.title : item.original_name}</label>

            <label className={styles.Release_date}>
               {(item.release_date && item.release_date) ||
                  (item.first_air_date && item.first_air_date)}
            </label>

            <label className={styles.Vote}>{Math.round(item.vote_average * 10) / 10}</label>
         </div>
      </>
   )
}
