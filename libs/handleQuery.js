export const handleQuery = (value) => {
  const href = value.split("?", 2);
  const queries = href[1].split("&", 2);
  const arr = [];
  queries.reduce((a, v) => {
    const newV = v.split("=");
    return arr.push(newV);
  }, {});
  return Object.fromEntries(arr);
};
export const handleSlug = (req, identification) => {
  const { href } = new URL(req.url);
  const slug = href.split(identification, 2);
  const slugs = slug[1].split("?", 1);
  const slugsArry = slugs[0].split("/");
  return slugsArry;
};
export const reduceTo20Items = (arry) => arry.slice(0, 20);
