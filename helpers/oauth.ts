const REDIRECT_URI =
  process.env.NODE_ENV === "production"
    ? "https://w3flo.com/oauth-callback"
    : "http://localhost:3000/oauth-callback";

export function getOAuthRedirectUri() {
  return REDIRECT_URI;
}
