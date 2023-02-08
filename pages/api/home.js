import axios from 'axios'
const { SERVER, API_KEY } = process.env

const handler = async (req, res) => {
   // const SERVER = 'https://api.themoviedb.org/3/'
   // const API_KEY = 'api_key=010812330abd90269a85b11aa21e3eef'
   const movie = !req.query.type ? true : false
   const handleUrl = url => {
      return `${SERVER}/${url}?page=1&${API_KEY}`
   }
   const popular = handleUrl(`${movie ? 'movie' : 'tv'}/popular`)
   const trending = handleUrl(`/trending/${movie ? 'movie' : 'tv'}/day`)
   const upcoming = handleUrl(`${movie ? 'movie/upcoming' : 'tv/airing_today'}`)
   const topRated = handleUrl(`${movie ? 'movie' : 'tv'}/top_rated`)

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
