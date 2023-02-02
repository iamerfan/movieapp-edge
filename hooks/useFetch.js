import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useFetch(url) {
   const [data, setData] = useState([])
   useEffect(() => {
      const raw = axios.get(url).then(({ data }) => setData(data))
   }, [])
   return data
}
