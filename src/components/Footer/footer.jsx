import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";
import img1 from "../images/visa.png";
import img2 from "../images/ms.png";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutgoingMail } from "react-icons/md";

const footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer-block">
            <h1>оплата</h1>
            <h5>
              ДостLorem ipsum dolor sit amet, <br /> consectetur adipiscing
              elit. Ullamcorper <br />
              justo, nec, pellentesque.авка
            </h5>
            <div className="footer-img">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
            </div>
          </div>
        <div className="footer-block">
            <h1>контакты</h1>
            <div className="size-icons">
              <h5> <FiPhoneCall style={{ fontSize: "18px" }} />+ (996) 771-98-84-58</h5>
              <h5><FiPhoneCall style={{ fontSize: "18px" }} />+ (996)771--98-84-58{" "}</h5>
              <h5>{" "}<MdOutgoingMail style={{ fontSize: "25px" }} />Amina_sweetness@gmail.com</h5>
            </div>
          </div>
          <div className="footer-block">
            <h1>социальные сети</h1>
            <div className="btn"><button style={{ background: "rgb(1, 89, 254)" }}>
          <FaFacebook style={{ fontSize: "22px" }} />Мы в Facebook</button>
              <button style={{ background: "#ad0f73" }}>
              <BsInstagram style={{ fontSize: "22px" }} /> Мы в Instagram </button>
              <button style={{ background: "red" }}>{" "}
                <TfiYoutube style={{ fontSize: "22px" }} /> Мы в You Tube</button>
            </div>
          </div>
          <div className="footer-block">
            <h1>Наш адрес:</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d365.5033823484813!2d74.5969209464882!3d42.87227301987675!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1709403853651!5m2!1sru!2skg"
              style={{
                width: "120px",
                height: "100px",
                borderRadius: "20px",
                allowfullscreen: "",
                loading: "lazy",
                referrerpolicy: "no-referrer-when-downgrade",
                cursor: "pointer",
                border: "5px solid #A2D23F ",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
