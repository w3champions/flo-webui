export interface AuthorizeState {
  region: string;
}

export interface BearerToken {
  access_token: string;
  expires_in: number;
}

export interface UserInfo {
  id: number;
  battletag: string;
}
