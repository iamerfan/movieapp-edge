import styles from 'components/Person/Person.module.scss'

export default function Details({ data }) {
   return (
      <div className={styles.Details}>
         <div className={styles.TitleContainer}>
            <div className={styles.title}>Also Known As : </div>
            <div className={styles.data}>
               {data.also_known_as.map((item, i) => {
                  if (i <= 2) return <label key={i}>{item}</label>
               })}
            </div>
         </div>
         <div className={styles.TitleContainer}>
            <div className={styles.title}>Birthday : </div>
            <div className={styles.data}>{data.birthday}</div>
         </div>
         {data.deathday && (
            <div className={styles.TitleContainer}>
               <div className={styles.title}>Died : </div>
               <div className={styles.data}>{data.deathday}</div>
            </div>
         )}

         <div className={styles.TitleContainer}>
            <div className={styles.title}>Location : </div>
            <div className={styles.data}>{data.place_of_birth}</div>
         </div>
         <div className={styles.TitleContainer}>
            <div className={`${styles.title} ${styles.top}`}>Biography : </div>
            <div className={styles.data}>{data.biography}</div>
         </div>
      </div>
   )
}
