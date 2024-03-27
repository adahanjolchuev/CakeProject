import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./allcakes.css";
import { Link } from "react-router-dom";
import loader from "../../images/loader.svg";
import { useMainContext } from "../context/mainContext";

function AllCakes() {
  const [category, setCategory] = useState("");
  const {load} = useMainContext()

  const cakes = useSelector((s) => s.cake.cake);

  const filterCakes = category
    ? cakes.filter((cake) => cake.category === category)
    : cakes;

  function hundleSort(category) {
    setCategory(category);
  }



  return !load ? (
    <center
      style={{
        height: "90vh",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        style={{
          width: "210px",
          height: "210px",
        }}
        src={loader}
        alt=""
      />
    </center>
  ) : (
    <div id="allcakes">
      <div className="container">
        <div className="allcakes">
          <h1>ТОРТЫ</h1>
          <div className="btns">
            <button onClick={() => hundleSort()}>Все торты</button>
            <button onClick={() => hundleSort("Шоколадные торты")}>
              Шоколадные торты
            </button>
            <button onClick={() => hundleSort("Детские торты")}>
              Детские торты
            </button>
            <button onClick={() => hundleSort("Свадебные торты")}>
              Свадебные торты
            </button>
            <button onClick={() => hundleSort("Клубничные торты")}>
              Клубничные торты
            </button>
            <button onClick={() => hundleSort("Праздничные торты")}>
              Праздничные торты
            </button>
            <button onClick={() => hundleSort("Пирожные торты")}>
              Пирожные торты
            </button>
          </div>
          <div className="allcakesblocks">
            {filterCakes.map((el) => (
              <Link to={`/cakes/detals/${el.id}`}>
                <div className="allcakesblock">
                  <img src={el.img} alt="" />
                  <h2>{el.name}</h2>
                  <h3>{el.price}сом</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCakes;
