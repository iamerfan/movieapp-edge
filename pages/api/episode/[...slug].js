import axios from "axios";

export default async function getEpisode(req, res) {
  const { SERVER, API_KEY } = process.env;
  const { slug } = req.query;
  const id = slug[0];
  const season = slug[1];
  const episode = slug[2];
  const reduceTo20Items = (arry) => arry.slice(0, 20);
  const url = `${SERVER}/tv/${id}/season/${season}/episode/${episode}?${API_KEY}`;
  const seasonUrl = `${SERVER}/tv/${id}$/season/${season}?${API_KEY}`;
  const data = await axios.get(url).then((res) => res.data);
  const seasonData = await axios.get(seasonUrl).then((res) => res.data);
  return res.status(200).json({
    seasonData,
    ...data,
    crew: reduceTo20Items(data.crew),
    guest_stars: reduceTo20Items(data.guest_stars),
  });
}
