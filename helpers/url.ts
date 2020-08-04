export function createAbsoluteUrl(
  path: string,
  query?: { [key: string]: string }
) {
  let url = `${window.location.origin}${path}`;
  if (query) {
    url +=
      "?" +
      Object.entries(query)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
        .join("&");
  }
  return url;
}
