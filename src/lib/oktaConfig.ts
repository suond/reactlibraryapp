export const oktaConfig = {
    clientId: `${import.meta.env.VITE_OKTA_CLIENTID}`,
    issuer: `${import.meta.env.VITE_OKTA_ISSUER}`,
    redirectUri: `${import.meta.env.VITE_OKTA_REDIRECT_URL}`,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}