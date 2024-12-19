import React from "react";
import logo from "../img/logo.svg";
import "./nav.scss";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
function Navbar() {
  return (
    <header className="header nav2">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="ul">
          <li className="li">
            <a href="#">Sotib olish </a>
          </li>
          <li className="li">
            <a href="#"> F.A.Q </a>
          </li>
          <li className="li">
            <a href="#">Kontakt</a>
          </li>
        </ul>

        <button className="search">
          <SearchOutlined />
        </button>

        <div className="buttonlar">
          <button className="register">Registiratsiya</button>
          <button className="voyti">Kirish</button>
          <MenuOutlined className="menuBars" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
