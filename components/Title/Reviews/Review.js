import Image from 'next/image'
import styles from 'components/HomePage/Slide.module.scss'
import quote from 'public/quote.svg'
import useDate from 'hooks/useDate'

export default function Review({ item }) {
   const { createdAt } = useDate(item.created_at)

   return (
      <>
         <div className={`${styles.SlideTitle} ${styles.Review}`}>
            <div className={styles.Content}>{item.content}</div>
            <div className={styles.ImgContianer}>
               <Image src={quote} alt='' width={50} height={50}></Image>
            </div>

            <div className={styles.Name}>{item.author}</div>
            <div className={styles.createdAt}>{createdAt}</div>
         </div>
      </>
   )
}
