require('dotenv').config();
import ThirdParty from "supertokens-node/recipe/thirdparty";
import Session from "supertokens-node/recipe/session";
import { TypeInput } from "supertokens-node/types";
import Dashboard from "supertokens-node/recipe/dashboard";
import UserRoles from "supertokens-node/recipe/userroles";

export function getApiDomain() {
    const apiPort = process.env.REACT_APP_API_PORT || 3001;
    const apiUrl = process.env.REACT_APP_API_URL || `http://localhost:${apiPort}`;
    return apiUrl;
}

export function getWebsiteDomain() {
    const websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000;
    const websiteUrl = process.env.REACT_APP_WEBSITE_URL || `http://localhost:${websitePort}`;
    return websiteUrl;
}

export const SuperTokensConfig: TypeInput = {
    supertokens: {
        // this is the location of the SuperTokens core.
        connectionURI: "https://try.supertokens.com",
    },
    appInfo: {
        appName: "SuperTokens Demo App",
        apiDomain: getApiDomain(),
        websiteDomain: getWebsiteDomain(),
    },
    // recipeList contains all the modules that you want to
    // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
    recipeList: [
        ThirdParty.init({
            signInAndUpFeature: {
                providers: [
                    {
                        config: {
                            // The thirdPartyId connects to the front-end id
                            thirdPartyId: "entra",
                            name: "Entra ID",
                            clients: [{
                                clientId: process.env.CLIENT_ID!,
                                clientSecret: process.env.CLIENT_SECRET!,
                                scope: ["openid", "email", "profile"]
                            }],
                            oidcDiscoveryEndpoint: "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration", 
                            userInfoMap: {
                                fromUserInfoAPI: {
                                    userId: "sub",
                                    email: "email",
                                }
                            }
                        }
                    },
                ],
            },
        }),
        Session.init(),
        Dashboard.init(),
        UserRoles.init(),
    ],
};
