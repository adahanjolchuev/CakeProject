import React from "react";
import "./about.css";

function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="about">
          <h1>О нас</h1>
          <div className="aboutData">
            <div className="aboutBlock">
              <img
                src="https://img1.russianfood.com/dycontent/images_upl/232/big_231239.jpg"
                alt=""
              />
            </div>
            <div className="about-text">
              <h3>
              Создаем сладости вручную из натуральных ингредиентов, чтобы Вы могли
порадовать себя в любой день, даже если нет особого повода. Наполняйте свою жизнь
яркими сбалансированными вкусами вместе с «Парфе»!
Нас выбирают для уютных дружеских встреч, шумных праздников, романтических
вечеров, особенных вечеров в кругу семьи и просто для того, чтобы побаловать себя.
Специально для Вас мы каждый день создаем тортики и десерты, которые можно купить
на нашем производстве, где Вас ждет самый большой ассортимент на любой вкус, по
адресу: пр. Комсомольский 68/2.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
