import styles from './Loading.module.scss'

export default function Loading({ Big }) {
   return (
      <div className={styles.Loading}>
         <div className={styles.Top}>
            <div></div>
            <div></div>
         </div>
         <div className={styles.Spinner}></div>
         <div className={`${styles.Bottom} ${Big && styles.Big}`}>
            <div></div>
            <div></div>
         </div>
      </div>
   )
}
