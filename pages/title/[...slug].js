import axios from 'axios'
import { server } from 'libs/config'
import styles from 'components/Title/Title.module.scss'
import Trailer from 'components/Title/Trailer'
import Details from 'components/Title/Details'
import Images from 'components/Title/Images'
import Episodes from 'components/Title/Episodes'
import { useRouter } from 'next/router'
import Credits from 'components/Title/Credits'
import Reviews from 'components/Title/Reviews'
import Similar from 'components/Title/Similar'

export default function Title({ data }) {
   const { slug } = useRouter().query
   const movie = slug[2] === 'movie' ? true : false
   return (
      <div className={styles.Title}>
         <div className={styles.Main}>
            <Trailer
               slogen={data.details.tagline}
               data={data.trailer}
               title={data.details.title ? data.details.title : data.details.name}
            />
            <Details data={data.details} extra={data.extra} />
         </div>
         {!movie && (
            <Episodes
               data={data.details.seasons}
               season={data.season}
               seriesName={data.details.name}
            />
         )}
         <Images data={data.images} />
         <Credits data={data.credits} />
         <Reviews data={data.reviews} />
         <Similar data={data.similar} />
      </div>
   )
}

export const getServerSideProps = async ({ query }) => {
   const { slug } = query
   const type = slug[0]
   const id = slug[1]
   const season = slug[2] ? slug[2] : 1
   const url = `${server}/api/title/${type}/${id}/${type === 'tv' && season}`
   const data = await axios
      .get(url)
      .then(res => res.data)
      .catch(e => console.log(e))
   return { props: { data } }
}
