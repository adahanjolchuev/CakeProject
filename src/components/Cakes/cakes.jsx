import React  from "react";
import "./cakes.css";
import { useNavigate } from "react-router-dom";
function Cakes() {
  const nav = useNavigate();

  function up() {
    window.scroll({
      top: "0",
      left: "0",
      behavior: "auto",
    });
  }


  return (
    <div id="cakes">
      <div className="container">
        <div className="cakes">
          <h2>НАШИ ТОРТЫ</h2>
          <div className="cakesBlocks">
            <div className="cakeBlock">
              <img src="https://wm-1367901.oml.ru/d/54588447_3.jpg" alt="" />
              <h3>Клубничные торты</h3>
              <button
                onClick={() => {
                  nav("/allcakes");
                  up();
                }}
              >
                Перейти на торты
              </button>
            </div>
            <div className="cakeBlock">
              <img
                src="https://gotovim-doma.ru/images/recipe/0/29/0299ac2db6d3ded2c190b5348429d5b6.jpg"
                alt=""
              />
              <h3>Шоколадные торты</h3>
              <button
                onClick={() => {
                  nav("/allcakes");
                  up();
                }}
              >
                Перейти на торты
              </button>
            </div>
            <div className="cakeBlock">
              <img
                src="https://iullia.ru/image/cache/data/28-01-2022-1/3036-1024x1024.jpg"
                alt=""
              />
              <h3>Детские торты</h3>
              <button
                onClick={() => {
                  nav("/allcakes");
                  up();
                }}
              >
                Перейти на торты
              </button>
            </div>
            <div className="cakeBlock">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZC_5i_Zn3BETWZ2S3J81pU_q2lQI7yrpjcQ&usqp=CAU"
                alt=""
              />
              <h3>Свадебные торты</h3>
              <button
                onClick={() => {
                  nav("/allcakes");
                  up();
                }}
              >
                Перейти на торты
              </button>
            </div>
            <div className="cakeBlock">
              <img
                src="https://tort-onix.ru/userfls/shop/large/2357_prazdnichnyy-tort-58.png"
                alt=""
              />
              <h3>Праздничные торты</h3>
              <button
                onClick={() => {
                  nav("/allcakes");
                  up();
                }}
              >
                Перейти на торты
              </button>
            </div>
            <div className="cakeBlock">
              <img
                src="https://i.ytimg.com/vi/Q2Irfh9i9O8/maxresdefault.jpg"
                alt=""
              />
              <h3>Пирожные торты</h3>
              <button
                onClick={() => {
                  nav("/allcakes");
                  up();
                }}
              >
                Перейти на торты
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cakes;
