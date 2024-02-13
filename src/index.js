import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./components/context/AuthContextProvider";
import PackageContextProvider from "./components/context/PackageContextProvider";
import FavoritesContextProvider from "./components/context/FavoriteContextProvder";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FavoritesContextProvider>
      <AuthContextProvider>
        <PackageContextProvider>
          <App />
        </PackageContextProvider>
      </AuthContextProvider>
    </FavoritesContextProvider>
  </BrowserRouter>
);
