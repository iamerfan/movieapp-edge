import Slide from 'components/HomePage/Slide'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Result from './Result'
import styles from './Search.module.scss'

export default function Results({ data, pageIndex, name }) {
   const [results, setResults] = useState([...data.results])
   useEffect(() => {
      setResults([...data.results])
   }, [data.results])

   const totalPages = data.total_pages
   const page = data.page
   const router = useRouter()
   const { slug } = useRouter().query
   const handlePage = i => {
      if (i === page) return
      const newSlug = [...slug]
      newSlug[pageIndex ? pageIndex : 1] = i
      router.push({ query: { slug: [...newSlug] } })
   }
   const handlePages = () => {
      if (page <= 1) return [page, page + 1, page + 2, page + 3]

      if (page > 1 && page < totalPages)
         return [page > 1 && page - 1, page, page < totalPages && page + 1]

      if (page === totalPages) return [page, page > 1 && page - 1, page > 1 && page - 2]
   }
   const mapPages = handlePages().map(item => {
      if (item > totalPages) return
      return (
         <label
            key={item}
            onClick={() => handlePage(item)}
            className={`${page === item && styles.active}`}>
            {item}
         </label>
      )
   })
   const mapResults = results
      ? results.map((item, i) => {
           if (!item.poster_path && !item.backdrop_path && !item.profile_path) return
           return <Result item={item} key={i} />
        })
      : 'Oops No Data Found'

   return (
      <div className={styles.Results}>
         <div className={styles.Name}>{name ? name : Results}</div>
         <div className={styles.Pages}>
            Pages:
            {mapPages}
            <label>... {totalPages}</label>
         </div>
         <div className={styles.Items}>{mapResults}</div>
      </div>
   )
}
