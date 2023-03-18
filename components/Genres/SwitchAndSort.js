import { ArrowDownIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from './Genres.module.scss'

export default function SwitchAndSort() {
   const router = useRouter()
   const { slug } = router.query
   const type = slug[0]
   const sortType = slug[3]
   const sort = [
      'popularity.asc',
      'popularity.desc',
      'release_date.asc',
      'release_date.desc',
      'original_title.asc',
      'original_title.desc',
      'vote_average.asc',
      'vote_average.desc',
   ]
   const [activeDropdown, setActiveDropdown] = useState(false)

   const handleType = i => {
      slug[0] = i //setting type on slug
      slug[1] = i === 'movie' ? 28 : 10759 //just a random genre
      router.push({ query: { slug } })
   }
   const handleSort = i => {
      slug[3] = i
      router.push({ query: { slug } })
   }
   return (
      <div className={styles.SwitchAndSort}>
         <div className={styles.Switch}>
            <div className={styles.SwitchContainer}>
               <button
                  onClick={() => handleType('movie')}
                  className={`${type === 'movie' && styles.active}`}>
                  Movie
               </button>
               <button
                  onClick={() => handleType('tv')}
                  className={`${type === 'tv' && styles.active}`}>
                  TV
               </button>
            </div>
         </div>
         <div className={styles.Sort}>
            <label>Sort By</label>
            <div
               className={styles.DropdownContainer}
               onClick={() => setActiveDropdown(!activeDropdown)}>
               {sortType}
               {!activeDropdown ? <ChevronDownIcon /> : <ChevronUpIcon />}
               <div className={`${styles.HiddenSection} ${activeDropdown && styles.active}`}>
                  {sort.map((item, i) => {
                     if (item === sortType) return
                     return (
                        <div key={i} onClick={() => handleSort(item)} className={styles.Dropdown}>
                           {item}
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>
      </div>
   )
}
