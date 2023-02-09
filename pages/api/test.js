export default async function handler(req, res) {
   const data = await fetch(
      'https://api.themoviedb.org/3/movie/14161?api_key=010812330abd90269a85b11aa21e3eef',
   )
   console.log(data)
   return res.status(200).json({ name: 'erfan' })
}
