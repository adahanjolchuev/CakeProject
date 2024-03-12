import React from "react";
import Home from "../pages/Home/home";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin/admin";

function MainRoutes() {
  const PUBLIC = [
    {path: '/' , element: <Home/> , key:1},
    {path: '/admin' , element: <Admin/> , key:2}
    // {path: '/' , element: <Home/> , key:1}

  ];

  return <div>(
    <Routes>
      {
        PUBLIC.map((el)=> (
          <Route path={el.path} element={el.element} key={el.key}/>
        ))
      }
    </Routes>
    )
  </div>;
}

export default MainRoutes;
