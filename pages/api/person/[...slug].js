import axios from 'axios'

export default async function getPerson(req, res) {
   const { SERVER, API_KEY } = process.env
   const { slug } = req.query
   const id = slug[0]

   const url = `${SERVER}/person/${id}?${API_KEY}`
   const appearedInUrl = `${SERVER}/discover/movie?${API_KEY}&with_people=${id}`
   const data = await axios.get(url).then(res => res.data)
   const movies = await axios.get(appearedInUrl).then(res => res.data.results)
   return res.status(200).json({ ...data, movies })
}
