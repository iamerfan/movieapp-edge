import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import Results from './Results'
import styles from './Search.module.scss'

export default function SearchComponent({ data }) {
   const searchRef = useRef()
   const router = useRouter()
   const { slug } = router.query
   const [searchValue, setSearchValue] = useState(slug[0])

   const handleClick = e => {
      e.preventDefault()
      const newSlug = [...slug]
      newSlug[0] = searchRef.current.value
      setSearchValue(searchRef.current.value)
      router.push({ query: { slug: newSlug } })
   }
   useEffect(() => {
      setSearchValue(router.query.slug[0])
   }, [router.query.slug[0]])

   return (
      <div className={styles.Search}>
         <form onSubmit={handleClick}>
            <div className={styles.Panel}>
               <input
                  type='text'
                  placeholder='Search For Anything ...'
                  ref={searchRef}
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
               />
               <button className={styles.SearchButton} onClick={handleClick}>
                  <MagnifyingGlassIcon />
               </button>
            </div>
         </form>
         <Results data={data} />
      </div>
   )
}
