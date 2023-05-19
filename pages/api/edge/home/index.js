import { handleQuery } from "libs/handleQuery";

const { SERVER, API_KEY } = process.env;

export const config = { runtime: "edge" };

export default handler = async (req, res) => {
  const { href } = new URL(req.url);
  const { type } = handleQuery(href);
  const movie = type === "movie" ? true : false;
  const handleUrl = (url) => {
    return `${SERVER}/${url}?page=1&${API_KEY}`;
  };
  const popular = handleUrl(`${movie ? "movie" : "tv"}/popular`);
  const trending = handleUrl(`/trending/${movie ? "movie" : "tv"}/day`);
  const upcoming = handleUrl(`${movie ? "movie/upcoming" : "tv/airing_today"}`);
  const topRated = handleUrl(`${movie ? "movie" : "tv"}/top_rated`);

  const urls = [trending, popular, upcoming, topRated];
  const promises =await Promise.all(urls.map( (url) => fetch(url).then(async(res) => {
    const value = await res.json()
    return value.results
  })));
  return new Response(JSON.stringify(promises));
};
