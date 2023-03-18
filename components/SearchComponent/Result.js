import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from 'components/HomePage/Slide.module.scss'
import { Item } from './Search.module.scss'
import { CalendarDaysIcon, StarIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Loading from 'components/HomePage/Loading'

const serverUrl = 'https://image.tmdb.org/t/p/'

export default function Result({ item }) {
   const type = useRouter().query.slug[0]
   const handleUrl = () => {
      if (item.poster_path) return item.poster_path
      if (item.backdrop_path) return item.backdrop_path
      if (item.profile_path) return item.profile_path
   }
   const person = item.profile_path ? true : false
   const [loading, setLoading] = useState(true)
   const imgUrl = `${serverUrl}/w500/${handleUrl()}`
   const href = person
      ? `/person/${item.id}`
      : `/title/${item.media_type ? item.media_type : type}/${item.id}`
   useEffect(() => {
      setLoading(true)
   }, [item.poster_path, item.backdrop_path, item.profile_path])

   return (
      <div className={`${styles.Slide} ${Item}`}>
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
         <Link href={href} className={`${styles.SlideTitle} ${person && styles.Credits}`}>
            <label className={styles.Name}>{item.title ? item.title : item.name}</label>
            {person && <label className={styles.KnownFor}>{item.known_for_department}</label>}
            {!person && (
               <>
                  <label className={styles.Release_date}>
                     <CalendarDaysIcon />
                     {(item.release_date && item.release_date) ||
                        (item.first_air_date && item.first_air_date)}
                  </label>

                  <label className={styles.Vote}>
                     <StarIcon />
                     {Math.round(item.vote_average * 10) / 10 <= 0
                        ? 'N/A'
                        : Math.round(item.vote_average * 10) / 10}
                  </label>
               </>
            )}
         </Link>
      </div>
   )
}
