import React from "react";
import logo from "../img/logo.svg";
import "./nav.scss";
import { SearchOutlined } from "@ant-design/icons";
function Navbar() {
  return (
    <header className="header nav2">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="ul">
          <li className="li">
            <a href="#">Как купить </a>
          </li>
          <li className="li">
            <a href="#"> F.A.Q </a>
          </li>
          <li className="li">
            <a href="#">Контакты</a>
          </li>
        </ul>

        <button className="search">
          <SearchOutlined />
        </button>

        <button className="register">Регистрация</button>
        <button className="voyti">Войти</button>
      </div>
    </header>
  );
}

export default Navbar;
