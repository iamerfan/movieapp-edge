import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from '../../HomePage/Loading'

export default function ImageSlider({ item }) {
   const [loading, setLoading] = useState(true)
   const imgUrl = `/img${item.file_path}`
   useEffect(() => {
      setLoading(true)
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
