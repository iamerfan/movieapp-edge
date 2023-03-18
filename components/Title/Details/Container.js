import React from 'react'
import styles from './Details.module.scss'

export default function Container({ label, children, className, titleClass }) {
   return (
      <div className={`${styles.TitleContainer} ${titleClass}`}>
         <label className={styles.Label}>{label}:</label>
         <label className={`${styles.data} ${className}`}>{children}</label>
      </div>
   )
}
