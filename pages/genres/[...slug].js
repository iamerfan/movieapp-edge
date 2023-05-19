import axios from 'axios'
import { server } from 'libs/config'
import styles from 'components/Genres/Genres.module.scss'
import Results from 'components/SearchComponent/Results'
import GenresPanel from 'components/Genres/GenresPanel'
import SwitchAndSort from 'components/Genres/SwitchAndSort'

export default function Genres({ data }) {
   return (
      <div className={styles.Genres}>
         <GenresPanel data={data.genres} />
         <SwitchAndSort />
         <Results data={data} pageIndex={2} name='Discover' />
      </div>
   )
}

export const getServerSideProps = async ({ query }) => {
   const { slug } = query
   const url = `${server}/api/edge/genres/${slug.join('/')}`
   if (!slug[0] || !slug[1] || !slug[2] || !slug[3])
      return {
         redirect: {
            permanent: false,
            destination: `/genres/${slug[0] ? slug[0] : 'movie'}/${slug[1] ? slug[1] : '28'}/${
               slug[2] ? slug[2] : '1'
            }/${slug[3] ? slug[3] : 'popularity.desc'}`,
         },
         props: {},
      }
   const data = await axios
      .get(url)
      .then(res => res.data)
      .catch(e => console.log(e))
   return { props: { data } }
}
