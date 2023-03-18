import Loading from 'components/HomePage/Loading'
import styles from 'components/Person/Person.module.scss'
import Image from 'next/image'
import { useState } from 'react'

const serverUrl = 'https://image.tmdb.org/t/p/w500'

export default function Main({ data }) {
   const [loading, setLoading] = useState(true)
   const imgUrl = `${serverUrl}${data.profile_path}`
   return (
      <div className={styles.Main}>
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
         <div className={styles.Credit}>
            <div className={styles.Name}>
               <label>{data.name}</label>
               <label className={styles.KnownFor}>{data.known_for_department}</label>
            </div>
         </div>
      </div>
   )
}
