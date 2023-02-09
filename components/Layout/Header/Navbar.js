import Link from 'next/link'
import { Login, Logout } from 'libs/redux/userReducer'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Header.module.scss'
import { useEffect } from 'react'
import useScroll from 'hooks/useScroll'
import { useState } from 'react'
import Image from 'next/image'
import Logo from 'public/logo.png'
import {
   Bars3Icon,
   FireIcon,
   XMarkIcon,
   MagnifyingGlassIcon,
   RocketLaunchIcon,
   BarsArrowDownIcon,
   LightBulbIcon,
   AtSymbolIcon,
} from '@heroicons/react/24/solid'

export default function Colapsiable() {
   const [headerActive, setHeaderActive] = useState(false)
   const [colaps, setColaps] = useState(false)
   const { scrollTop } = useScroll()
   const handleLogin = () => {
      if (user.isLogged) {
         dispatch(Logout())
      }
      if (!user.isLogged)
         dispatch(Login({ id: '1', username: 'Erfan', name: 'عرفان', isLogged: true }))
   }
   const user = useSelector(state => state.user)
   const dispatch = useDispatch()
   useEffect(() => {
      scrollTop > 10 ? setHeaderActive(true) : setHeaderActive(false)
   }, [scrollTop])

   return (
      <div
         className={`${styles.Navbar} ${headerActive && styles.active} ${
            colaps && styles.collapse
         }`}>
         <div className={styles.Logo}>
            <Image src={Logo} width={40} height={40} />
            <label>Movie App</label>
         </div>
         <div className={styles.HeaderItems}>
            <div className={styles.Seperators}>
               <Link className={styles.item} href={'/'}>
                  <MagnifyingGlassIcon /> Search
               </Link>
               <Link className={styles.item} href={'/'}>
                  <FireIcon />
                  Trending
               </Link>
               <div className={styles.item}>
                  <BarsArrowDownIcon />
                  Genres
               </div>
            </div>
            <div className={`${styles.Seperators} ${styles.Login}`}>
               <div className={styles.item}>
                  <RocketLaunchIcon /> Upcoming
               </div>
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
