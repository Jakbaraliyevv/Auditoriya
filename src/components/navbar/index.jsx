import React from "react";
import logo from "../img/logo.svg";
import "./nav.scss";
import {
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const korzinaData = useSelector((state) => state.korzina.korzinaData);

  const navigate = useNavigate();
  const navigateSubmit = () => {
    navigate("/korzina");
  };

  const navSubmit = () => {
    navigate("/home");
  };

  return (
    <header className="header nav2">
      <div className="container1">
        <div className="logo">
          <img
            onClick={navSubmit}
            src={logo}
            className="cursor-pointer"
            alt=""
          />
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
          <div className="flex items-center gap-6 max-[840px]:text-[0.9em] max-[768px]:hidden">
            <Badge onClick={navigateSubmit} count={korzinaData.length}>
              <ShoppingCartOutlined className="text-[1.8em] text-[#FFF] cursor-pointer" />
            </Badge>
            <HeartOutlined className="text-[1.8em]  text-[#FFF] cursor-pointer" />
          </div>
          <MenuOutlined className="menuBars" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
