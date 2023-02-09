import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FilmIcon, TvIcon } from '@heroicons/react/24/outline'
import { StarIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function HomeCarousel({ data }) {
   const router = useRouter()
   const query = router.query
   const serverUrl = 'https://image.tmdb.org/t/p/'

   const handleType = type => {
      if (query.type === type) return
      if (!query.type && type === 'movie') return
      if (type === 'tv') return router.push({ query: { ...query, type } })
      else return router.push('/')
   }
   const bp = {
      300: {
         width: 300,
         slidesPerView: 1,
         centeredSlides: true,
      },
      600: {
         width: 600,
         slidesPerView: 1,
         centeredSlides: true,
      },
      1224: {
         width: 1224,
         slidesPerView: 2,
         centeredSlides: false,
         pagination: { clickable: true },
      },
   }
   const mapData = data.map((item, i) => {
      return (
         <SwiperSlide key={i} className='Slide'>
            <Image
               src={`${serverUrl}/w500/${item.poster_path ? item.poster_path : item.backdrop_path}`}
               fill
               sizes=''
               priority
               alt=''
            />
            <div className='SlideTitle'>
               <label className='title'>
                  {item.title ? item.title : item.original_name}
                  <div className='divider'></div>
               </label>
               <label className='releaseDate'>
                  <CalendarDaysIcon />
                  {(item.release_date && item.release_date) ||
                     (item.first_air_date && item.first_air_date)}
               </label>
               <label className='vote'>
                  <StarIcon /> {Math.round(item.vote_average * 10) / 10}
               </label>
               <label className='overview '>{item.overview}</label>
            </div>
         </SwiperSlide>
      )
   })
   return (
      <Swiper
         modules={[Navigation, Autoplay, Pagination]}
         navigation
         breakpoints={bp}
         pagination
         autoplay
         className='HomeSwiper'>
         {mapData}
         <div className='Switch'>
            <button
               onClick={() => handleType('movie')}
               className={!query.type || query.type === 'movie' ? 'active' : ''}>
               <FilmIcon /> Movie
            </button>
            <button
               onClick={() => handleType('tv')}
               className={query.type === 'tv' ? 'active' : ''}>
               <TvIcon /> Tv Seires
            </button>
         </div>
      </Swiper>
   )
}
