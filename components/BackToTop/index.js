import React from 'react'
import useScroll from 'hooks/useScroll'
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'
import styles from './BackToTop.module.scss'

export default function BackToTop() {
   const { scrollTop } = useScroll()
   const handleClick = () => (document.documentElement.scrollTop = 0)
   return (
      <button
         onClick={handleClick}
         className={scrollTop > 100 ? `${styles.BackToTop} ${styles.active}` : styles.BackToTop}>
         {scrollTop > 100 ? <ArrowUpCircleIcon /> : null}
      </button>
   )
}
