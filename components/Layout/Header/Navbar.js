import Link from 'next/link'
import styles from './Header.module.scss'
import { useEffect } from 'react'
import useScroll from 'hooks/useScroll'
import { useState } from 'react'
import Image from 'next/image'
import Logo from 'public/logo.png'
import {
   Bars3Icon,
   XMarkIcon,
   BarsArrowDownIcon,
   LightBulbIcon,
   AtSymbolIcon,
} from '@heroicons/react/24/solid'
import SearchModal from './SearchModal'
import { useRouter } from 'next/router'

export default function Colapsiable() {
   const router = useRouter()
   const [headerActive, setHeaderActive] = useState(false)
   const [colaps, setColaps] = useState(false)
   const { scrollTop } = useScroll()
   useEffect(() => {
      scrollTop > 10 ? setHeaderActive(true) : setHeaderActive(false)
   }, [scrollTop])

   return (
      <div
         className={`${styles.Navbar} ${headerActive && styles.active} ${
            colaps && styles.collapse
         }`}>
         <Link href={'/'} className={styles.Logo}>
            <Image src={Logo} width={40} height={40} alt='' />
            <label>Movie App</label>
         </Link>
         <div className={styles.HeaderItems}>
            <div className={styles.Seperators}>
               <SearchModal />
               <Link shallow href='/genres' className={styles.item}>
                  <BarsArrowDownIcon />
                  Genres
               </Link>
            </div>
            <div className={`${styles.Seperators} ${styles.Login}`}>
               <div className={styles.item}>
                  <LightBulbIcon /> About
               </div>
               <div className={styles.item}>
                  <AtSymbolIcon /> Contact
               </div>
            </div>
         </div>
         <button className={styles.Toggle} onClick={() => setColaps(!colaps)}>
            {colaps ? <XMarkIcon /> : <Bars3Icon />}
         </button>
      </div>
   )
}
