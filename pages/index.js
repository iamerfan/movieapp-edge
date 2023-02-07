import axios from 'axios'
import Carousel from 'components/HomePage/Carousel'
import HomeCarousel from 'components/HomePage/HomeCarousel'

import { server } from 'libs/config'
export default function Home({ data }) {
   console.log(data)
   return (
      <div className='HomePage'>
         {/* <HomeCarousel data={data[0]} />
         <Carousel data={data[1]} name='Trending' />
         <Carousel data={data[2]} name='Upcoming' />
         <Carousel data={data[3]} name='Top Rated' /> */}
      </div>
   )
}
export const getServerSideProps = async req => {
   // const response = await axios.get(`${server}/api/home`).then(res => console.log(res))
   const data = await axios
      .get(
         `https://api.themoviedb.org/3/movie/14161?api_key=010812330abd90269a85b11aa21e3eef&language=en-US`,
      )
      .then(res => {
         return res.data
      })

   return { props: { data } }
}
