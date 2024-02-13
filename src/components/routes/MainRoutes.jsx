import React from "react";
import { Route, Routes } from "react-router-dom";



// import Favorite from "../favorites/Favorite";
import Login from "../auth/Login";

import DetailPackage from "../products/DetailPackage";
import EditPackage from "../products/EditPackages";
import PackageList from "../products/PackageList";
import Register from "../auth/Register";
import PasswordReset from "../auth/PasswordReset";
import HomePage from "../pages/HomePage";

export const ADMIN_ROUTES = [
  {
    link: "/edit/:id",
    element: <EditPackage />,
    id: 1,
  },
];

const PUBLIC_ROUTES = [
  {
    link: "/",
    element: <HomePage />,
    id: 1,
  },
  {
    link: "/details/:id",
    element: <DetailPackage />,
    id: 2,
  },
  { id: 3, link: "/packages", element: <PackageList /> },
  { id:4, link: "/password-reset", element: <PasswordReset/>},
  // { id: 4, link: "/about", element: <AboutPage /> },
  // { id: 6, link: "/favorites", element: <Favorite /> },
  {
    link: "/register",
    element: <Register />,
    id: 7,
  },
  {
    link: "/login",
    element: <Login />,
    id: 8,
  },
];

const MainRoutes = () => {
  return (
    <Routes>
      <Route >
        {ADMIN_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Route>

      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;