import React from "react";
import "./review.css";
import { useSelector } from "react-redux";
import AddtoOtzyv from "../AddToOtzyv/addtoOtzyv";
import { useMainContext } from "../context/mainContext";
import Button from "@mui/material/Button";

function Review() {
  const { modal, setToModal } = useMainContext();

  const otzyvtar = useSelector((s) => s.reviews.reviews);

  console.log(otzyvtar, " otzyvyar");

  return (
    <div id="review">
      <div className="container">
        <div
          className="addOtzyvy"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <Button
            onClick={() => {
              setToModal(!modal);
            }}
            sx={{ background: "#a60fad", color: "white" }}
            className="addOtzyv"
          >
            Оставить отзыв
          </Button>
        </div>
        <div className="review">
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
          <div className="slider">
            <div className="sliderImg">
              <img
                src="https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?cs=srgb&dl=pexels-pixabay-371160.jpg&fm=jpg"
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
          {otzyvtar.map((el) => (
            <div className="slider">
              <div className="sliderImg">
                <img src={el.photo} alt="" />
                <div className="sliderText">
                  <h2>{el.name}</h2>
                  <p>{el.otzyv}</p>
                </div>
              </div>
            </div>
          ))}

          <AddtoOtzyv />
        </div>
      </div>
    </div>
  );
}

export default Review;
