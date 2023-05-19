import { handleSlug } from "libs/handleQuery";
export const config = { runtime: "edge" };

export default async function getPerson(req, res) {
  const { SERVER, API_KEY } = process.env;
  const slug = handleSlug(req, "/person/");
  const id = slug[0];
  const url = `${SERVER}/person/${id}?${API_KEY}`;
  const appearedInUrl = `${SERVER}/discover/movie?${API_KEY}&with_people=${id}`;
  const data = await fetch(url).then((res) => res.json());
  const { results } = await fetch(appearedInUrl).then(async (res) => await res.json());
  return new Response(JSON.stringify({ ...data, movies: results }));
}
