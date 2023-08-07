import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
// dev-6ghquedmko4cclhj.us.auth0.com (domain)
// qXtGQ2tz169OILbI95mfm9Id5QZwqjiK (client id)
root.render(
     <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    catchLocation='localStorage'
  >
    <UserProvider>
  <ProductsProvider>
    <FilterProvider> 
      <App />
    </FilterProvider>
  </ProductsProvider>
  </UserProvider>
  </Auth0Provider>
);
