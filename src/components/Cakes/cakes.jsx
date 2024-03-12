import React from "react";
import "./cakes.css";

function Cakes() {
  return (
    <div id="cakes">
      <div className="container">
        <div className="cakes">
          <h2>НАШИ ТОРТЫ</h2>
          <div className="cakesBlocks">
            <div className="cakesBlock">
              <img
                src="https://пироженка.рф/wp-content/uploads/2022/08/tort-shokolad-na-snegu.jpg"
                alt=""
              />
              <h3>Category</h3>
              <h3>Нежный сливочный</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cakes;
