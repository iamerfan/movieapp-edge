import { HeartIcon, StarIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartOutline, LinkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Genres from 'components/Title/Details/Genres'
import styles from './Details.module.scss'
import Container from './Container'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Top({ data, extra }) {
   const { slug } = useRouter().query
   const movie = slug[0] === 'movie' ? true : false
   const [liked, setLiked] = useState(false)
   const handleLike = () => {
      setLiked(prev => !prev)
   }
   return (
      <div className={styles.Top}>
         <div className={styles.Icons}>
            {liked ? (
               <HeartIcon className={`${styles.Heart} ${styles.active}`} onClick={handleLike} />
            ) : (
               <HeartOutline className={styles.Heart} onClick={handleLike} />
            )}
            <Link href={data.homepage}>
               <LinkIcon />
            </Link>
         </div>
         <Container label='Title'>{data.title}</Container>

         <Container label='Release Date'>
            {movie ? data.release_date : data.first_air_date}
         </Container>

         <Container label='Genres' titleClass={styles.Center}>
            <Genres data={data.genres} />
         </Container>

         <Container label='Rated'>{extra.Rated}</Container>
      </div>
   )
}
