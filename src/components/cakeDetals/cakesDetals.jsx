import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import loader from "../../images/loader.svg";
import "./cakesDetal.css";
import Button from "@mui/material/Button";
import { ADD_ORDER, PLUS_COUNT_ORDER } from "../../redux/actionTypes";
import { useMainContext } from "../context/mainContext";

function CakesDetals() {
  const { id } = useParams();
  const [detal, setDetal] = useState([]);
  const dispatch = useDispatch();
  const { load } = useMainContext();
  const [category, setCategory] = useState([]);
  const nav = useNavigate();

  const cakesDetal = useSelector((state) => state.cake.cake);

  function cakesRecomandation(category) {
    let data = cakesDetal.filter((el) => el.category === category);
    setCategory(data);
  }

  useEffect(() => {
    if (detal.length > 0) {
      cakesRecomandation(detal[0].category);
    }
  }, [detal]);

  function getCakesDetal() {
    let detals = cakesDetal.filter((el) => el.id == id);
    setDetal(detals);
  }

  function DecrementCount(index) {
    setDetal((detal) =>
      detal.map((el, ind) => {
        if (ind === index) {
          return { ...el, count: el.count + 1 };
        } else {
          return el;
        }
      })
    );
  }

  function IncrementCount(index) {
    setDetal((detal) =>
      detal.map((el, ind) => {
        if (ind === index && el.count > 1) {
          return { ...el, count: el.count - 1 };
        } else {
          return el;
        }
      })
    );
  }

  function QuantityOrder() {
    dispatch({ type: PLUS_COUNT_ORDER, payload: 1 });
  }

  function getOrder(el) {
    let data = JSON.parse(localStorage.getItem("order")) || [];
    let res = data.some((il) => {
      return el.id === il.id;
    });
    if (res === false) {
      data.push(el);
      localStorage.setItem("order", JSON.stringify(data));
      dispatch({ type: ADD_ORDER, payload: el });
      QuantityOrder();
    } else {
      alert("У вас уже есть такая книга");
    }
  }

  useEffect(() => {
    getCakesDetal();
  }, [id]);

  function up() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
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
    <>
      <div id="cakesDetals">
        <div className="container">
          <div className="cakesDetals">
            {detal.map((el, index) => (
              <div className="detalCakes">
                <img src={el.img} alt="" />
                <div className="detalText">
                  <h3>{el.name}</h3>
                  <h3>Рецепт:</h3>
                  <p>{el.recipe}</p>
                  <h5>{el.price * el.count}сом</h5>
                  <div className="countBtns">
                    <Button onClick={() => IncrementCount(index)}>-</Button>
                    <h5 style={{ color: "black" }}>{el.count}</h5>
                    <Button
                      onClick={() => {
                        DecrementCount(index);
                      }}
                    >
                      +
                    </Button>
                  </div>
                  {/* <Link to={""}> */}
                  <Button
                    onClick={() => {
                      getOrder(el);
                    }}
                  >
                    дабавить корзину
                  </Button>
                  {/* </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="recomandation">
        <div className="container">
          <h1>Похожие торты</h1>
          <div className="recomandionCakes">
            {category.map((el) => (
              <div
                onClick={() => {
                  nav(`/cakes/detals/${el.id}`);
                  up();
                }}
                className="recomandationCakester"
              >
                <img src={el.img} alt="" />
                <h2>{el.name}</h2>
                <h3>{el.price}сом</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1></h1>
      </div>
    </>
  );
}

export default CakesDetals;
