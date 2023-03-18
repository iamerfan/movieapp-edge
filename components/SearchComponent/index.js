import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { useState } from 'react'
import Results from './Results'
import styles from './Search.module.scss'

export default function SearchComponent({ data }) {
   const searchRef = useRef()
   const router = useRouter()
   const { slug } = router.query
   const handleClick = () => {
      const newSlug = [...slug]
      newSlug[0] = searchRef.current.value
      router.push({ query: { slug: newSlug } })
   }
   return (
      <div className={styles.Search}>
         <div className={styles.Panel}>
            <input type='text' placeholder='Search For Anything ...' ref={searchRef} />
            <button className={styles.SearchButton} onClick={handleClick}>
               <MagnifyingGlassIcon />
            </button>
         </div>
         <Results data={data} />
      </div>
   )
}
