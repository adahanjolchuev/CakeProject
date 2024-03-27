import React from "react";
import Home from "../pages/Home/home";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin/admin";
import Cakes from "../components/Cakes/cakes";
import CakesDetals from "../components/cakeDetals/cakesDetals";
import Review from "../components/Reviews/review";
import AllCakes from "../components/AllCakes/allCakes";
import Order from "../Order/order";

function MainRoutes() {
  const PUBLIC = [
    { path: "/", element: <Home />, key: 1 },
    { path: "/admin", element: <Admin />, key: 2 },
    { path: "/cakes", element: <Cakes />, key: 3 },
    { path: "/cakes/detals/:id", element: <CakesDetals />, key: 4 },
    { path: "/reviews", element: <Review />, key: 5 },
    { path: "/allCakes", element: <AllCakes />, key: 6 },
    { path: "/cakes/Orders", element: <Order />, key: 7 },
  ];

  return (
    <div>
      <Routes>
        {PUBLIC.map((el) => (
          <Route path={el.path} element={el.element} key={el.key} />
        ))}
      </Routes>
    </div>
  );
}

export default MainRoutes;
