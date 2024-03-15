import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./popularRecal.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 5 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 5000)}s`;
  };
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "70px",
          fontFamily: "Madimi One",
          fontFamily: "sans-serif",
          fontWeight: "900",
          color: "#a60fad",
          fontSize: "35px",
        }}
      >
        Отзывы наших клиентов
      </h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider">
            <div className="sliderImg">
              <img
                src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710374400&semt=sph"
                alt=""
              />
            </div>
            <div className="sliderText">
              <h2>Ольга</h2>
              <p>
                Заказывали торт на свадьбу, привезли нам его прямо в кафе, все
                были в восторге только от вида торта Вкус был
                божественным!!!!!!. Гостям торт очень понравился, все спрашивали
                кто делает такую красоту и вкусноту)) Большое спасибо Вам! Будем
                теперь заказывать тортики только у Вас!))
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="slider">
            <div className="sliderImg">
              <img
                src="https://mos-renue-confectionery.21.oml.ru/thumb/2/NijJUY0lrvr7X2agAszukA/640r480/d/54667083_3.jpg"
                alt=""
              />
            </div>
            <div className="sliderText">
              <h2>Максим</h2>
              <p>
                Как то заказывала тут набор макаронс с фотопечатью в подарок и
                осталась очень довольна. Сервис, отношение к клиенту, дизайн,
                вкус - все на высшем уровне! Теперь всем своим друзьям и
                знакомым рекомендую этот магазин.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="slider">
            <div className="sliderImg">
              <img
                src="https://www.cqmi.ca/media/k2/items/cache/4ab4b6df96c060fa741e97b50eafb07c_XL.webp"
                alt=""
              />
            </div>
            <div className="sliderText">
              <h2>Светлана</h2>
              <p>
                Большое спасибо Вам! Заказывали торт и шарики!!! Все доставили
                во время! Подстроились под наши пожелания! Торт шикарный и на
                вид и на вкус! Спасибо будем и впредь к Вам обращаться!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="slider">
            <div className="sliderImg">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className="sliderText">
              <h2>Марина</h2>
              <p>
                Как то заказывала тут набор макаронс с фотопечатью в подарок и
                осталась очень довольна. Сервис, отношение к клиенту, дизайн,
                вкус - все на высшем уровне! Теперь всем своим друзьям и
                знакомым рекомендую этот магазин.
              </p>
            </div>
          </div>
        </SwiperSlide>
        /*{" "}
        <SwiperSlide>
          {" "}
          <div className="slider">
            <div className="sliderImg">
              <img
                src="https://weproject.media/upload/medialibrary/42f/42f4461bee1db8366c473f75cbcf5985.JPG"
                alt=""
              />
            </div>
            <div className="sliderText">
              <h2>Аскат</h2>
              <p>
                Спасибо огромное вашей кондитерской за доставленные
                удовольствие, заказывали торт и шарики, все очень понравилось,
                торт был потрясающим, браво мастеру!!!!
              </p>
            </div>
          </div>
        </SwiperSlide>{" "}
        */
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
