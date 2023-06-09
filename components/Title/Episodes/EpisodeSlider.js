import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../../HomePage/Slide.module.scss'
import Loading from '../../HomePage/Loading'
import { StarIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function EpisodeSlider({ item, seriesName }) {
   const [loading, setLoading] = useState(true)
   const imgUrl = `/img${item.still_path}`
   useEffect(() => {
      setLoading(true)
   }, [item.still_path])
   return (
      <>
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
         {loading && <Loading />}
         <Link
            href={`/episode/${item.show_id}/${item.season_number}/${item.episode_number}/${
               seriesName && seriesName
            }`}
            className={`${styles.SlideTitle} ${styles.Episode}`}
         >
            <label className={styles.EpisodeName}>{item.title ? item.title : item.name}</label>

            <label className={styles.Release_date}>Episode {item.episode_number}</label>

            <label className={styles.Vote}>
               <StarIcon />
               {Math.round(item.vote_average * 10) / 10}
            </label>
         </Link>
      </>
   )
}
