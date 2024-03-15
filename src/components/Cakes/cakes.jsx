import React from "react";
import "./cakes.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Cakes() {
  const cakes = useSelector((state) => state.cake.cake);
  return (
    <div id="cakes">
      <div className="container">
        <div className="cakes">
          <h2>НАШИ ТОРТЫ</h2>
          <div className="cakesBlocks">
            {cakes.map((el) => (
              <Link to={`/cakes/detals${el.id}`}>
              <div className="cakeBlock">
                <img src={el.img} alt="" />
                <h3>{el.name}</h3>
                <h4>{el.price}$</h4>
              </div>
              </Link>
            ))}
          </div>
          <button>смотреть все торты</button>
        </div>
      </div>
    </div>
  );
}

export default Cakes;
