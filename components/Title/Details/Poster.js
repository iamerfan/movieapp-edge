import Image from 'next/image'
import styles from './Details.module.scss'

export default function Poster({ path }) {
   const sizes = '(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw '
   const imgUrl = `/img${path}`

   return <Image fill sizes={sizes} priority src={imgUrl} alt='' className={styles.Poster} />
}
