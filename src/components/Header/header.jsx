import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";

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
            <Link to={'/'}>Home</Link>
            <a href="#">About Us</a>
            <a href="#">Cakes</a>
            <a href="#">Contact</a>
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
