interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '1OdxsiT2ns9Gg66V8bVRC450DoAfV4G2',
  domain: 'kaskada.eu.auth0.com',
  callbackURL: 'http://localhost:49152/home'
};
