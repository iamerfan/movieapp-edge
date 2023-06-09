import axios from 'axios'
import { server } from 'libs/config'
import SearchComponent from 'components/SearchComponent'

export default function Search({ data }) {
   return <SearchComponent data={data?.multi} />
}

export const getServerSideProps = async req => {
   const { slug } = req.query
   const searchQuery = slug[0]
   const page = slug[1]
   const url = `${server}/api/edge/search/${searchQuery}/${page ? page : '1'}`
  const data = await fetch(url).then((res) => res.json());
  return { props: { data } };
}
