import KeycloakConnect from "keycloak-connect";

const config: KeycloakConnect.KeycloakConfig = {
    realm: 'my-realm',
    "auth-server-url": 'http://localhost:8080/auth',
    resource: 'express-web',
    "confidential-port": 0,
    "ssl-required": "external"
}

const keyclaok = new KeycloakConnect({}, config)