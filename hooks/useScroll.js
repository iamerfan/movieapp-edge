import React, { useEffect, useState } from 'react'

export default function useScroll() {
   const [scrolling, setScrolling] = useState(false)
   const [scrollTop, setScrollTop] = useState(0)

   const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop)
      setScrolling(e.target.documentElement.scrollTop > scrollTop)
   }
   useEffect(() => {
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
   }, [])

   return { scrollTop, scrolling }
}
