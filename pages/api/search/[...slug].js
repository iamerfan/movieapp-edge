import axios from 'axios'
const { SERVER, API_KEY } = process.env

const handler = async (req, res) => {
   const { slug } = req.query
   const searchQuery = slug[0]
   const page = slug[1]
   const handleUrl = key => {
      return `${SERVER}/search/${key}?${API_KEY}&query=${searchQuery}&page=${page}`
   }
   const multi = handleUrl('multi')
   const urls = [multi]
   const handleAxios = url =>
      axios.get(url).then(({ data }) => {
         return data
      })

   const promises = urls.map(url => handleAxios(url))
   const response = await Promise.all([...promises]).then(values => {
      return { multi: values[0] }
   })
   return res.status(200).json(response)
}
export default handler
