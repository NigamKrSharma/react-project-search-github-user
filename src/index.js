import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));

//dev-6ghquedmko4cclhj.us.auth0.com domain *dev-pu8wyk-g.us.auth0.com*
//tbADvCGlcDS96Gkw2ZuIVmTjNbSuL7rc client ID *GYsVn60CkUU6fa4yiwpRrT1KVL5KuzPh*
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-6ghquedmko4cclhj.us.auth0.com'
      clientId='tbADvCGlcDS96Gkw2ZuIVmTjNbSuL7rc'
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
