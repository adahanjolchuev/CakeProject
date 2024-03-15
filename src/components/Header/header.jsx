import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import "./header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  const nav = useNavigate();
  //adahan

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <h1>
            Сладости <br /> Амины
          </h1>
          <nav>
            <Link to={"/"}>Главная</Link>
            <NavLink>О нас</NavLink>
            <a href="#">Торты</a>
            <a href="#">Контакт</a>
          </nav>
          <div
            className=""
            style={{ display: "flex", gap: "20px", alignItems: "center" }}
          >
            <p>
              <FaHeart />
            </p>
            <p onClick={() => nav("/admin")}>
              <CgProfile />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
