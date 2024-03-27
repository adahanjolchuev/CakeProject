import React from "react";
import "./hero.css";
import video from "../../video/video cake.mp4";

function Hero() {
  return (
    <div id="hero">
      <video className="fonBackround" autoPlay muted loop src={video}></video>
      <div className="container">
        <div className="hero">
          <div className="hero-text">
            <h1>ВКУСНЫЕ ТОРТЫ У НАС</h1>
            <h2>
              Друзья, если так случилось, что обычные пирожные и тортики из
              гастронома уже не будоражат Ваш вкус и хочется чего-то
              оригинального, то Вы попали на правильный сайт. Мы исследовали
              кухни разных стран в поисках оригинальных сладостей для Вашего
              стола. вы когда-нибудь слышали про такую сладость как макаруны ?
              Невероятно вкусно, и никаких проблем с фигурой.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
