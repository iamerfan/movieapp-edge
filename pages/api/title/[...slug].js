import axios from 'axios'
const { SERVER, API_KEY, EXTRA_URL, TRAILER_URL } = process.env

const handler = async (req, res) => {
   const { slug } = req.query
   const type = slug[0]
   const id = slug[1]
   const seasonId = slug[2]

   //urls
   const handleUrls = url => `${SERVER}/${type}/${id}${url}?${API_KEY}`
   const title = handleUrls('')
   const externalIds = handleUrls('/external_ids')
   const Credits = handleUrls('/credits')
   const Images = handleUrls('/images')
   const Reviews = handleUrls('/reviews')
   const Similar = handleUrls('/similar')
   const Season = handleUrls(`/season/${seasonId}`)

   //handling Urls
   const urls = [title, externalIds, Credits, Images, Reviews, Similar, seasonId && Season]
   const handleAxios = url =>
      axios
         .get(url)
         .then(({ data }) => data)
         .catch(e => console.log(e))
   const promises = urls.map(url => handleAxios(url))

   //Handle All The Promises from Tmdb api
   const response = await Promise.all([...promises])
      .then(values => {
         const reduceTo20Items = arry => arry.slice(0, 20)
         return {
            details: values[0],
            ids: values[1],
            credits: values[2],
            images: {
               backdrops: reduceTo20Items(values[3].backdrops),
               logos: reduceTo20Items(values[3].logos),
               posters: reduceTo20Items(values[3].posters),
            },
            reviews: values[4],
            similar: values[5],
            season: values[6] ? values[6] : [],
         }
      })
      .catch(e => console.log(e))

   //Get Extra Data and Trailer
   const { ids } = response
   const imdbId = ids.imdb_id

   if (!imdbId) return res.status(200).json({ ...response })
   const extra = await axios
      .get(`${EXTRA_URL}${imdbId}`)
      .then(({ data }) => data)
      .catch(e => console.log(e))
   const trailer = await axios.get(`${TRAILER_URL}${imdbId}`).then(({ data }) => data)

   // Return Data With Extra Data'
   return res.status(200).json({ ...response, extra, trailer })
}
export default handler
