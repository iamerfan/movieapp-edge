import React from 'react'
import useScroll from 'hooks/useScroll'

export default function index() {
   const { scrollTop } = useScroll()
   const handleClick = () => (document.documentElement.scrollTop = 0)
   return (
      <button
         onClick={handleClick}
         className={scrollTop > 100 ? 'BackToTop BackToTopActive' : 'BackToTop'}>
         {scrollTop > 100 ? 'Back To Top' : 's'}
      </button>
   )
}
