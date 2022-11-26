import { Route, Routes } from "react-router-dom";
import React, { ReactElement } from "react";
import { Home } from "./home";
import { Blog } from "./blog";
import { Projects } from "./projects";

type RouteType = {
  path: string;
  component: ReactElement;
};
export const Contents = () => {
  const routes: RouteType[] = [
    { path: "/home", component: <Home /> },
    { path: "/blog/:name", component: <Blog /> },
    { path: "/project/:name", component: <Projects /> },
  ];
  return (
    <React.Fragment>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            element={route.component}
          ></Route>
        ))}
      </Routes>
    </React.Fragment>
  );
};
