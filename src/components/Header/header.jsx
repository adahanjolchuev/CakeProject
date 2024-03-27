import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import "./header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const nav = useNavigate();
  let orderCounter = useSelector((s) => s.order.orderCount);

  function upScroll() {
    window.scroll({
      top: 900,
      left: 0,
      behavior: "smooth",
    });
  }
  function bottomScroll() {
    window.scroll({
      top: 4900,
      left: 0,
      behavior: "smooth",
    });
  }
  function TopScroll() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <h1 onClick={() => nav("/")}>
            Сладости <br /> Амины
          </h1>
          <nav>
            <NavLink to={"/"}>Главная</NavLink>
            <Link to={"/"} onClick={() => upScroll()}>
              О нас
            </Link>
            <Link onClick={() => TopScroll()} to={"/allCakes"}>
              Торты
            </Link>
            <Link onClick={() => bottomScroll()}>Контакт</Link>
            <NavLink onClick={() => TopScroll()} to={"/reviews"}>
              Отзывы
            </NavLink>
          </nav>
          <div
            className=""
            style={{ display: "flex", gap: "20px", alignItems: "center" }}
          >
            <div className="orderPages">
              <p onClick={() => nav("/cakes/Orders")}>
                <span style={{ fontSize: "15px" ,
                display: orderCounter === 0 ? 'none' : 'block'
               }}>{orderCounter}</span>
                <FaHeart />
              </p>
              <h6 onClick={() => nav("/cakes/Orders")}>Корзина</h6>
            </div>
            <div className="orderPages">
              <p
                style={{ flexDirection: "column" }}
                onClick={() => nav("/admin")}
              >
                <CgProfile />
                <h6 onClick={() => nav("/admin")}>Админ</h6>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
