import axios from 'axios'
import Carousel from 'components/HomePage/Carousel'
import HomeCarousel from 'components/HomePage/HomeCarousel'
import Switch from 'components/HomePage/Switch'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Home({ data }) {
   return (
      <>
         <HomeCarousel data={data[0]} />
         <Switch />
         <Carousel data={data[1]} name='Trending' />
         <Carousel data={data[2]} name='Upcoming' />
         <Carousel data={data[3]} name='Top Rated' />
      </>
   )
}
export const getServerSideProps = async req => {
   const { type } = req.query
   const url = `${process.env.URL}/api/home/?type=${type ? 'tv' : 'movie'}`
   const data = await axios.get(url).then(res => res.data)
   return { props: { data } }
}
