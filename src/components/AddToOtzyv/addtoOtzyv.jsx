import React, { useState } from "react";
import "./addtoOtzyv.css";
import { useMainContext } from "../context/mainContext";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { ADD_REVIEWS } from "../../redux/actionTypes";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function AddtoOtzyv() {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [otzyv, setOtzyv] = useState("");
  const { modal, setToModal } = useMainContext();
  const nav = useNavigate();

  const dispatch = useDispatch();

  function addOtzyv() {
    if (name !== "" && otzyv !== "") {
      let obj = {
        photo: photo,
        name: name,
        otzyv: otzyv,
        id: Date.now(),
      };
      let data = JSON.parse(localStorage.getItem("reviews")) || [];
      data.push(obj);
      localStorage.setItem("reviews", JSON.stringify(data));
      dispatch({ type: ADD_REVIEWS, payload: obj });
    } else {
      alert("Заполните все поле!!!");
    }
  }
  return (
    <div
      style={{
        transition: ".3s",
        opacity: modal ? "1" : "0",
      }}
      className="addModal"
      onClick={() => setToModal(!modal)}
    >
      <div
        style={{
          transform: modal ? "scale(1)" : "scale(0)",
        }}
        className="addModal_content"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "10px 30px",
          }}
        >
          <button
            style={{ background: "none", border: "none", fontSize: "23px" }}
            onClick={() => setToModal(!modal)}
          >
            x
          </button>
        </div>
        <div className="addReviews">
          <h2>Написать отзыв</h2>
          <TextField
            onChange={(e) => setPhoto(e.target.value)}
            id="standard-basic"
            label="Ваша фото"
            variant="standard"
          />
          <TextField
            onChange={(e) => setName(e.target.value)}
            id="standard-basic"
            label="Имя/Фамилия"
            variant="standard"
          />
          <TextField
            onChange={(e) => setOtzyv(e.target.value)}
            id="standard-basic"
            label="Отзыв..."
            variant="standard"
          />
          <Button
            onClick={() => {
              addOtzyv();
            }}
            variant="standard"
            sx={{ background: "#a60fad" }}
          >
            Отправить отзыв
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddtoOtzyv;
