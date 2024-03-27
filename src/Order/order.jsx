import React, { useEffect, useState } from "react";
import "./order.css";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_ORDER, MINUS_COUNT_ORDER } from "../redux/actionTypes";
import { useNavigate } from "react-router-dom";

function Order() {
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const order = useSelector((s) => s.order.order);

  const orderCountr = useSelector((s) => s.order.orderCount);

  useEffect(() => {
    setBasket(order);
  }, [order]);

  useEffect(() => {
    let total = basket.reduce((acc, item) => acc + item.price * item.count, 0);
    setTotalPrice(total);
  }, [basket]);

  function DelOrder(id) {
    dispatch({ type: DELETE_ORDER, payload: id });
  }

  return (
    <div id="order">
      <div className="container">
        <div id="total">
          <h3>
            <span>Общий цена:</span>
            {totalPrice}сом
          </h3>
        </div>

        <div className="order">
          <div className="orderblocks">
            {basket && basket.length !== 0 ? (
              basket.map((el) => (
                <div className="orderblock">
                  <img src={el.img} alt="" />
                  <div className="order_text">
                    <h2>{el.name}</h2>
                    <h4>Количество: {el.count}</h4>
                    <h3>{el.price * el.count}сом</h3>
                    <button
                      onClick={() => {
                        DelOrder(el.id);
                        if (orderCountr > 0) {
                          dispatch({ type: MINUS_COUNT_ORDER, payload: 1 });
                        }
                      }}
                    >
                      Удалить торт из корзины
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  margin: "200px 0",
                  gap: "20px",
                }}
              >
                <h1>Ваша корзина пусто</h1>
                <button
                  style={{
                    padding: "10px 20px",
                    borderRadius: "10px",
                    background: "#a60fad",
                    color: "white",
                    border: "none",
                  }}
                  onClick={() => {
                    nav("/allcakes");
                  }}
                >
                  Перейти на торты
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Order;
