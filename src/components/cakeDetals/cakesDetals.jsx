import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

function CakesDetals() {
  const { id } = useParams();
  const [detal, setDetal] = useState([]);

  // Получаем данные из Redux
  const cakesDetal = useSelector((state) => state);

  // Функция для фильтрации и установки деталей
  function getCakesDetal() {
    const detals = cakesDetal.filter((el) => el.id === id);
    setDetal(detals);
  }

  useEffect(() => {
    // Вызываем функцию только если данные из Redux получены
    if (cakesDetal.length > 0 && id) {
      getCakesDetal();
    }
  }, [id, cakesDetal]); // Добавляем cakesDetal в зависимости

  return (
    <div id="cakesDetals">
      <div className="container">
        <div className="cakesDetals">
          <h2>hello</h2>
          {detal.map((el) => (
            <img key={el.id} src={el.img} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CakesDetals;
