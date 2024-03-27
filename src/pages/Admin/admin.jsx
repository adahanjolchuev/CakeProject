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
  const [category, setCategory] = useState("");
  const [recipe, setRecipe] = useState("");

  const [validation, setValidation] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();

  function addCake() {
    if (name === "") {
      setValidation(!validation);
    } else if (price === "") {
      setValidation(!validation);
    } else if (img === "") {
      setValidation(!validation);
    } else if (category === "") {
      setValidation(!validation);
    } else if (recipe === "") {
      setValidation(!validation);
    } else {
      let obj = {
        img: img,
        name: name,
        price: price,
        category: category,
        recipe: recipe,
        count: 1,
        id: Date.now(),
      };
      let data = JSON.parse(localStorage.getItem("cake")) || [];
      data.push(obj);
      localStorage.setItem("cake", JSON.stringify(data));
      dispatch({ type: ADD_CAKE, payload: obj });
      nav("/allCakes");
      setImg("");
      setName("");
      setPrice("");
      setCategory("");
      setRecipe("");
    }
  }

  function imgFile(e) {
    const file = e.target.files[0]
    const reader = new FileReader();

    reader.onloadend = () => {
      setImg(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <h1>Admin</h1>
          <div className="inputstar">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="imgInputs"
            >
              <input 
                className="imgInputs"
                style={{
                  border: validation ? "red solid 3px" : "solid 3px #a60fad",
                  width: "340px",
                  height: "315px",
                  outline: "none",
                  display: img ? "none" : "block",
                  margin: "40px 0",
                }}
                onChange={imgFile}
                type="file"
                placeholder="imgCake"
                accept="img"
              />{" "}
              {img && <img className="imgInputImg" src={img} alt="Cake" />}
              <button
                className="reverseImgBTN"
                style={{
                  display: img ? "block" : "none",
                }}
                onClick={() => setImg(!img)}
              >
                изменить фото
              </button>
            </div>
            <div className="inputs">
              <input
                style={{
                  border: validation ? "#f02121 solid 3px" : "",
                }}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="nameCake"
                value={name}
              />
              <h5>
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
              <h5>
                {validation ? <MdError /> : ""}{" "}
                {validation ? "заполните все поле!!!" : ""}
              </h5>
              <input
                style={{
                  border: validation ? "#f02121 solid 3px" : "",
                }}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="categoryCake"
                value={category}
              />
              <h5>
                {validation ? <MdError /> : ""}{" "}
                {validation ? "заполните все поле!!!" : ""}
              </h5>
              <input
                style={{
                  border: validation ? "#f02121 solid 3px" : "",
                }}
                onChange={(e) => setRecipe(e.target.value)}
                type="text"
                placeholder="recipeCake"
                value={recipe}
              />
              <h5>
                {validation ? <MdError /> : ""}{" "}
                {validation ? "заполните все поле!!!" : ""}
              </h5>
              <h5>
                {validation ? <MdError /> : ""}{" "}
                {validation ? "заполните все поле!!!" : ""}
              </h5>
            </div>
          </div>
          <h3>
            {validation ? <MdError /> : ""}{" "}
            {validation ? "заполните все поле!!!" : ""}
          </h3>
          <button
            onClick={() => {
              addCake();
              setValidation(!validation);
            }}
          >
            {validation ? "ок" : "дабавить торт"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
