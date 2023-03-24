import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import styles from './Title.module.scss'
import { isMobile } from 'react-device-detect'

export default function Trailer({ data, title, slogen }) {
   console.log(data)
   return (
      <div className={styles.Trailer}>
         <div className={styles.TrailerContainer}>
            {data.errorMessage ? (
               <h1 className={styles.Error}>{data.errorMessage}</h1>
            ) : (
               <iframe
                  src={`/video/${data.videoId}`}
                  allowFullScreen
                  mozallowfullscreen='true'
                  webkitallowfullscreen='true'
                  frameborder='no'
                  className={styles.Frame}
               ></iframe>
            )}
         </div>
         <div className={styles.Name}>
            <Bars3BottomRightIcon />
            {title}
            <div className={styles.Slogen}>{slogen}</div>
         </div>
      </div>
   )
}
