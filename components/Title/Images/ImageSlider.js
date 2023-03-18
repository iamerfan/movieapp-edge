import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from '../../HomePage/Loading'

const serverUrl = 'https://image.tmdb.org/t/p/w500'

export default function ImageSlider({ item }) {
   const [loading, setLoading] = useState(true)
   const imgUrl = `${serverUrl}${item.file_path}`
   useEffect(() => {
      setLoading(true)
      console.log(item.file_path)
   }, [item.file_path])
   return (
      <Link href={imgUrl} target={`_blank`}>
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
      </Link>
   )
}
