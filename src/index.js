import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react'
import axios from "axios"
import './i18next'
import i18next from "i18next"
const lang=localStorage.getItem('lang') || 'en'
axios.baseUrl = ""
i18next.changeLanguage(lang)
axios.defaults.headers.common['Application-Language'] =lang
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-kp1zwpvt.us.auth0.com"
        clientId="uEolVyUamQWKJWa0SfuRAKsIvMmbX0Ba"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
