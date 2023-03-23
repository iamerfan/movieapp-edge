import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from './Loading'
import Link from 'next/link'
const serverUrl = 'https://image.tmdb.org/t/p/w500/'

export default function BigSlide({ item }) {
   const handleUrl = () => {
      if (item.poster_path) return item.poster_path
      if (item.backdrop_path) return item.backdrop_path
   }
   const router = useRouter()
   const { type } = useRouter().query
   const [loading, setLoading] = useState(true)
   const imgUrl = `${serverUrl}${handleUrl()}`
   const href = `/title/${type ? type : 'movie'}/${item.id}`

   useEffect(() => {
      setLoading(true)
   }, [item.poster_path, item.backdrop_path])

   return (
      <div className='BigSlide' onClick={() => router.push(href)}>
         <div className='insideContainer'>
            {loading && <Loading />}
            <Image
               src={imgUrl}
               fill
               onLoadStart={() => setLoading(true)}
               onLoadingComplete={() => setLoading(false)}
               priority
               sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              100vw'
               alt=''
            />
            <div className='SlideTitle'>
               <div className='Name'>
                  <label>{item.title ? item.title : item.name}</label>
                  <div className='divider'></div>
                  <div className='overview'>{item.overview}</div>
               </div>
            </div>
         </div>
      </div>
   )
}
