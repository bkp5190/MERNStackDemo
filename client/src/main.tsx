import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Deck from "./app/Deck";
import { Header } from "./app/Header";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak/Keycloak";
import LoginPage from "./app/LoginPage";
import Profile from "./app/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/decks/:deckId",
    element: <Deck />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ReactKeycloakProvider authClient={keycloak}>
    <React.StrictMode>
      <div className="page">
        <Header />
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  </ReactKeycloakProvider>
);
