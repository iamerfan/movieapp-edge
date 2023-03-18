import Image from 'next/image'
import styles from './Details.module.scss'

export default function Poster({ path }) {
   const serverUrl = 'https://image.tmdb.org/t/p/'
   const sizes = '(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw '
   const imgUrl = `${serverUrl}/w500/${path}`

   return <Image fill sizes={sizes} priority src={imgUrl} alt='' className={styles.Poster} />
}
