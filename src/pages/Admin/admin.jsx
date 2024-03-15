import React, { useState } from "react";
import "./admin.css";
import { useDispatch } from "react-redux";
import { ADD_CAKE } from "../../redux/actionTypes";
import { useNavigate } from "react-router-dom";
import { MdError } from "react-icons/md";

function Admin() {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [validation, setValidation] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();

  function addCake() {
    if (name === "" && price === "" && img === "") {
      setValidation(!validation);
    } else {
      let obj = {
        img: img,
        name: name,
        price: price,
        id: Date.now(),
      };
      let data = JSON.parse(localStorage.getItem("cake")) || [];
      data.push(obj);
      localStorage.setItem("cake", JSON.stringify(data));
      dispatch({ type: ADD_CAKE, payload: obj });
      nav("/");
    }
  }

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <h1>Admin</h1>
          <div className="inputs">
            <input
              style={{
                border: validation ? "red solid 3px" : "",
              }}
              onChange={(e) => setImg(e.target.value)}
              type="text"
              placeholder="imgCake"
              value={img}
            />
            <h5
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "13px",
                color: "red",
                margin: "0 10px",
              }}
            >
              {validation ? <MdError /> : ""}{" "}
              {validation ? "заполните все поле!!!" : ""}
            </h5>
            <input
              style={{
                border: validation ? "red solid 3px" : "",
              }}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="nameCake"
              value={name}
            />
            <h5
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "13px",
                color: "red",
                margin: "0 5px",
              }}
            >
              {validation ? <MdError /> : ""}{" "}
              {validation ? "заполните все поле!!!" : ""}
            </h5>
            <input
              style={{
                border: validation ? "red solid 3px" : "",
              }}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              placeholder="priceCake"
              value={price}
            />
            <h5
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "13px",
                color: "red",
                margin: "0 10px",
              }}
            >
              {validation ? <MdError /> : ""}{" "}
              {validation ? "заполните все поле!!!" : ""}
            </h5>
          </div>
          <button
            onClick={() => {
              addCake();
              setValidation(!validation);
              setImg("");
              setName("");
              setPrice("");
            }}
          >
            create cake
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
