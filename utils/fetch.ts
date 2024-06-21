export default async function fetchAPI(
  url: string,
  method: string,
  headers?: any,
  body?: any
) {
  return await fetch(url, {
    method,
    headers: headers
      ? { ...headers, "Content-Type": "application/json" }
      : { "Content-Type": "application/json" },
    body: body && JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((err) => err);
}
