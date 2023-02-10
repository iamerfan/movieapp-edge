import { CalendarDaysIcon, StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from './Loading'

export default function BigSlide({ item }) {
   const serverUrl = 'https://image.tmdb.org/t/p/'
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
         {loading && <Loading Big />}
         <div className='SlideTitle'>
            <label className='title'>
               {item.title ? item.title : item.original_name}
               <div className='divider'></div>
            </label>
            <label className='releaseDate'>
               <CalendarDaysIcon />
               {(item.release_date && item.release_date) ||
                  (item.first_air_date && item.first_air_date)}
            </label>
            <label className='vote'>
               <StarIcon /> {Math.round(item.vote_average * 10) / 10}
            </label>
            <label className='overview '>{item.overview}</label>
         </div>
      </>
   )
}
