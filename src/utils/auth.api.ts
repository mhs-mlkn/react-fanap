export async function fetchSSOToken<T>(
  baseUrl: string,
  client_id: string,
  code: string,
  code_verifier: string,
  redirect_url: string
): Promise<T> {
  const params = {
    grant_type: "authorization_code",
    client_id,
    code,
    code_verifier,
    redirect_uri: redirect_url
  };

  const url = new URL(baseUrl);
  url.search = new URLSearchParams(params).toString();

  return fetch(url.toString(), {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded"
    })
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json() as Promise<T>;
  });
}

export async function refreshSSOToken<T>(
  baseUrl: string,
  client_id: string,
  refresh_token: string,
  code_verifier: string
) {
  const params = {
    grant_type: "refresh_token",
    client_id,
    refresh_token,
    code_verifier
  };
  const url = new URL(baseUrl);
  url.search = new URLSearchParams(params).toString();
  return fetch(url.toString(), {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded"
    })
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json() as Promise<T>;
  });
}

export async function fetchSSOUser(url: string, access_token: string) {
  return fetch(url, {
    method: "GET",
    headers: new Headers({ Authorization: `Bearer ${access_token}` })
  }).then(res => res.json());
}
