import ThirdParty, { Google, Github, Apple, Twitter } from "supertokens-auth-react/recipe/thirdparty";
import { ThirdPartyPreBuiltUI } from "supertokens-auth-react/recipe/thirdparty/prebuiltui";
import Session from "supertokens-auth-react/recipe/session";

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

export const SuperTokensConfig = {
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
	                    // The front-end and back-end config need the same ID to work
                        // The ID sets your callback url
                        // ie http://localhost:3000/auth/callback/entra
                        id: "entra",
                        name: "Entra ID", // Will display "Continue with X"

                        // optional
                        // you do not need to add a click handler to this as
                        // we add it for you automatically.
                        buttonComponent: (props: {name: string}) => <div style={{
                            cursor: "pointer",
                            border: "1",
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            borderRadius: "5px",
                            borderStyle: "solid"
                        }}>{"Login with " + props.name}</div>
                    }
                ],
            },
        }),

        Session.init(),
    ],
};

export const recipeDetails = {
    docsLink: "https://supertokens.com/docs/thirdparty/introduction",
};

export const PreBuiltUIList = [ThirdPartyPreBuiltUI];

export const ComponentWrapper = (props: { children: JSX.Element }): JSX.Element => {
    return props.children;
};
