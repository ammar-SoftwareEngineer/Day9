import"./App.css"
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RootLayout from "./RootLayout";
import { Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Cards from "./Cards";
import MovieDetail from "./MovieDetail";
import FavoritesPage from "./FavoritesPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Cards /> },
        { path: "movies/:id", element: <MovieDetail /> },
        { path: "/home", element: <Cards /> },
        { path: "/MyFav", element: <FavoritesPage /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
