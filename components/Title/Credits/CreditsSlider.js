import Image from 'next/image'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from '../../HomePage/Loading'
import styles from 'components/HomePage/Slide.module.scss'
import { CalendarDaysIcon, StarIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const serverUrl = 'https://image.tmdb.org/t/p/w500'

export default function CreditsSlider({ item }) {
   const [loading, setLoading] = useState(true)
   const imgUrl = `${serverUrl}${item.profile_path}`
   const href = `/person/${item.id}`
   useEffect(() => {
      setLoading(true)
   }, [item.profile_path])
   return (
      <Link href={href}>
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
         <div className={`${styles.SlideTitle} ${styles.Credits}`}>
            <label className={styles.KnownFor}>
               {item.job ? item.job : item.known_for_department}
            </label>
            <label className={styles.Name}>{item.title ? item.title : item.name}</label>
            {item.character && <label className={styles.CharacterName}>{item.character}</label>}
         </div>
      </Link>
   )
}
