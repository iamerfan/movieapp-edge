import { handleSlug, reduceTo20Items } from "libs/handleQuery";
export const config = { runtime: "edge" };

export default async function getEpisode(req, res) {
  const { SERVER, API_KEY } = process.env;
  const slug = handleSlug(req, "/episode/");
  const id = slug[0];
  const season = slug[1];
  const episode = slug[2];
  const url = `${SERVER}/tv/${id}/season/${season}/episode/${episode}?${API_KEY}`;
  const seasonUrl = `${SERVER}/tv/${id}$/season/${season}?${API_KEY}`;
  const data = await fetch(url).then((res) => res.json());
  const seasonData = await fetch(seasonUrl).then((res) => res.json());
  
  return new Response(
    JSON.stringify({
      seasonData,
      ...data,
      crew: reduceTo20Items(data.crew),
      guest_stars: reduceTo20Items(data.guest_stars),
    })
  );
}
