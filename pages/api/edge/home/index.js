import axios from "axios";
import { handleQuery } from "libs/handleQuery";

const { SERVER, API_KEY } = process.env;

export default handler = async (req, res) => {
  const { href } = new URL(req.url);
  const { type } = handleQuery(href);
  const movie = type === "movie" ? true : false;
  const handleUrl = (url) => {
    return `${SERVER}/${url}?page=1&${API_KEY}`;
  };
  const popular = handleUrl(`${type}/popular`);
  const trending = handleUrl(`/trending/${type}/day`);
  const upcoming = handleUrl(`${movie ? "movie/upcoming" : "tv/airing_today"}`);
  const topRated = handleUrl(`${type}/top_rated`);

  const urls = [trending, popular, upcoming, topRated];
  const handleAxios = (url) =>
    fetch(url).then(async (res) => {
      const { results } = await res.json();
      return results;
    });

  const promises = urls.map((url) => handleAxios(url));
  const response = await Promise.all([...promises]).then((values) => {
    return [...values];
  });
  return new Response(JSON.stringify(response));
};
