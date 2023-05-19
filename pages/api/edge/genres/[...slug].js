import { handleSlug } from "libs/handleQuery";
export const config = { runtime: "edge" };

export default async function getMoviesBaseOnGenre(req, res) {
  const { SERVER, API_KEY } = process.env;
  const slug = handleSlug(req, "/genres/");
  const type = slug[0];
  const id = slug[1];
  const page = slug[2];
  const sort = slug[3];
  const url = `${SERVER}/discover/${type}/?${API_KEY}&with_genres=${id}&page=${page}&sort_by=${sort}`;
  const allGenresUrl = `${SERVER}/genre/${type}/list?${API_KEY}`;
  const data = await fetch(url).then((res) => res.json());
  const allGenres = await fetch(allGenresUrl).then((res) => res.json());
  return new Response(JSON.stringify({ ...data, ...allGenres }));
}
