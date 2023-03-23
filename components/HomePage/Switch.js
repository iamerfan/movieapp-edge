import { FilmIcon, TvIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'

export default function Switch() {
   const router = useRouter()
   const query = router.query

   const handleType = type => {
      if (query.type === type) return
      if (!query.type && type === 'movie') return
      if (type === 'tv') return router.push({ query: { ...query, type } })
      else return router.push('/')
   }
   return (
      <div className='Switch'>
         <button
            onClick={() => handleType('movie')}
            className={!query.type || query.type === 'movie' ? 'active' : ''}
         >
            <FilmIcon /> Movie
         </button>
         <button onClick={() => handleType('tv')} className={query.type === 'tv' ? 'active' : ''}>
            <TvIcon /> Tv Series
         </button>
      </div>
   )
}
