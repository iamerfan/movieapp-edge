import axios from 'axios'

export default async function getMoviesBaseOnGenre(req, res) {
   const { SERVER, API_KEY } = process.env
   const { slug } = req.query
   const type = slug[0]
   const id = slug[1]
   const page = slug[2]
   const sort = slug[3]
   const url = `${SERVER}/discover/${type}/?${API_KEY}&with_genres=${id}&page=${page}&sort_by=${sort}`
   const allGenresUrl = `${SERVER}/genre/${type}/list?${API_KEY}`
   const data = await axios.get(url).then(res => res.data)
   const allGenres = await axios.get(allGenresUrl).then(res => res.data)
   return res.status(200).json({ ...data, ...allGenres })
}
