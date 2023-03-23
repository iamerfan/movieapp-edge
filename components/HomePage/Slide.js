import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './Slide.module.scss'
import Loading from './Loading'
import { CalendarDaysIcon, StarIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const serverUrl = 'https://image.tmdb.org/t/p/'

export default function Slide({ item }) {
   const handleUrl = () => {
      if (item.poster_path) return item.poster_path
      if (item.backdrop_path) return item.backdrop_path
   }

   const { type } = useRouter().query
   const [loading, setLoading] = useState(true)
   const imgUrl = `${serverUrl}/w500/${handleUrl()}`
   const href = `/title/${type ? type : 'movie'}/${item.id}`
   useEffect(() => {
      setLoading(true)
   }, [item.poster_path, item.backdrop_path])

   return (
      <a href={href}>
         <Image
            src={imgUrl}
            fill
            onLoadingComplete={() => setLoading(false)}
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              100vw'
            priority
            alt=''
         />
         {loading && <Loading />}
         <div className={styles.SlideTitle}>
            <label className={styles.Name}>{item.title ? item.title : item.name}</label>

            <label className={styles.Release_date}>
               <CalendarDaysIcon />
               {(item.release_date && item.release_date) ||
                  (item.first_air_date && item.first_air_date)}
            </label>

            <label className={styles.Vote}>
               <StarIcon />
               {Math.round(item.vote_average * 10) / 10}
            </label>
         </div>
      </a>
   )
}
