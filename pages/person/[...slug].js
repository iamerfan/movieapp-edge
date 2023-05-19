import axios from 'axios'
import Details from 'components/Person/Details'
import Main from 'components/Person/Main'
import { server } from 'libs/config'
import styles from 'components/Person/Person.module.scss'
import { ImagesCarousel } from 'components/HomePage/Carousel.module.scss'
import Carousel from 'components/HomePage/Carousel'
import { useState } from 'react'

export default function Person({ data }) {
   return (
      <div className={styles.Container}>
         <div className={styles.Person}>
            <Main data={data} />
            <Details data={data} />
         </div>
         <div className={styles.Similars}>
            <label className={styles.Title}>Appeared in</label>
            <Carousel data={data.movies} className={ImagesCarousel} />
         </div>
      </div>
   )
}

export const getServerSideProps = async ({ query }) => {
   const { slug } = query
   const id = slug[0]
   const url = `${server}/api/edge/person/${id}`
   if (!id)
      return {
         redirect: {
            permanent: false,
            destination: `/`,
         },
         props: {},
      }
   const data = await axios
      .get(url)
      .then(res => res.data)
      .catch(e => console.log(e))
   return { props: { data } }
}
