import { handleSlug } from "libs/handleQuery";
const { SERVER, API_KEY } = process.env;

export const config = { runtime: "edge" };

export default handler = async (req, res) => {
  const slug = handleSlug(req, "/search/");
  const searchQuery = slug[0];
  const page = slug[1];
  const handleUrl = (key) => {
    return `${SERVER}/search/${key}?${API_KEY}&query=${searchQuery}&page=${page}`;
  };
  const multi = handleUrl("multi");
  const urls = [multi];
  const handleAxios = (url) =>
    fetch(url).then((res) => res.json());

  const promises = urls.map((url) => handleAxios(url));
  const response = await Promise.all([...promises]).then((values) => {
    return { multi: values[0] };
  });
  return new Response(JSON.stringify(response));
};
