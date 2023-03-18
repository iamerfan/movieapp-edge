import Carousel from 'components/HomePage/Carousel'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../Title/Title.module.scss'
import { ReviewCarousel } from '../HomePage/Carousel.module.scss'

export default function Similar({ data }) {
   const { slug } = useRouter().query
   const handleName = () => {
      if (slug[0] === 'tv') return `Similar Tv Show's`
      return `Similar Movie's`
   }
   return (
      <div className={styles.Container}>
         <div className={styles.Name}>{handleName()} </div>
         <Carousel data={data.results} className={ReviewCarousel} />
      </div>
   )
}
