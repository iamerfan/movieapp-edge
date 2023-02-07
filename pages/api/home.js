import axios from 'axios'
const { SERVER, API_KEY } = process.env

const handler = async (req, res) => {
   const movie = !req.query.type ? true : false
   const popular = `${SERVER}/${movie ? 'movie' : 'tv'}/popular?page=1&${API_KEY}`
   const trending = `${SERVER}/trending/${movie ? 'movie' : 'tv'}/day?page=1&${API_KEY}`
   const upcoming = `${SERVER}/${movie ? 'movie/upcoming' : 'tv/airing_today'}?page=1&${API_KEY}`
   const topRated = `${SERVER}/${movie ? 'movie' : 'tv'}/top_rated?page=1&${API_KEY}`
   const urls = [trending, popular, upcoming, topRated]
   const handleAxios = url =>
      axios.get(url).then(({ data }) => {
         return data.results
      })

   const promises = urls.map(url => handleAxios(url))
   const response = await Promise.all([...promises]).then(values => {
      return [...values]
   })
   return res.status(200).json(response)
}
export default handler
