import KeycloakConnect from 'keycloak-connect';
import session from 'express-session'

export const memoryStore = new session.MemoryStore();

const config: KeycloakConnect.KeycloakConfig = {
    realm: 'my-realm',
    "auth-server-url": 'http://localhost:8080/auth/',
    resource: 'express-web',
    "confidential-port": 0,
    "ssl-required": "external"
}

const keycloak = new KeycloakConnect({store: memoryStore}, config)

export default keycloak;