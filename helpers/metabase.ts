const { METABASE_ENDPOINT, METABASE_USERNAME, METABASE_PASSWORD } = process.env;

export async function queryMetabase<T>(
  token: string,
  question: number,
  variables: { [key: string]: unknown }
): Promise<T[]> {
  const baseUrl = METABASE_ENDPOINT;
  const res = await fetch(`${baseUrl}/api/card/${question}/query`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Metabase-Session": token,
    },
    body: JSON.stringify({
      ignore_cache: false,
      parameters: Object.entries(variables).map(([k, v]) => {
        return {
          type: "category",
          target: ["variable", ["template-tag", k]],
          value: String(v),
        };
      }),
    }),
  }).then((res) => res.json());
  const data = res.data;
  return data.rows.map((r) => {
    return Object.fromEntries(
      data.cols.map(({ name }, idx) => {
        return [name, r[idx]];
      })
    ) as unknown as T;
  });
}

export async function getMetabaseAuthToken(): Promise<string> {
  const baseUrl = METABASE_ENDPOINT;
  const username = METABASE_USERNAME;
  const password = METABASE_PASSWORD;
  return fetch(`${baseUrl}/api/session`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => data.id);
}
