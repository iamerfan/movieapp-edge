import axios from 'axios'
import Carousel from 'components/HomePage/Carousel'
import HomeCarousel from 'components/HomePage/HomeCarousel'

import { server } from 'libs/config'
export default function Home({ data }) {
   console.log(data[0])
   return (
      <div className='HomePage'>
         <HomeCarousel data={data[0]} />
         <Carousel data={data[1]} name='Trending' />
         <Carousel data={data[2]} name='Upcoming' />
         <Carousel data={data[3]} name='Top Rated' />
      </div>
   )
}
export const getServerSideProps = async req => {
   const data = await axios.get(`${server}/api/home`).then(res => {
      return res.data
   })
   return { props: { data } }
}
