import React from "react";
import logo from "../img/footerLogo.svg";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useMediaQuery } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Footer() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const mobile = useMediaQuery("(max-width:768px)");

  const state = useSelector((state) => state.korzina.korzinaData);

  const navigate = useNavigate();

  const navuSub = () => {
    navigate("/korzina");
  };

  const navHome = () => {
    navigate("/home");
  };
  return (
    <footer className="mt-[90px]">
      {mobile ? (
        <BottomNavigation
          className="fixed bottom-0 !w-full z-30"
          sx={{ width: 500, background: "rgb(12, 13, 19)" }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="Bosh"
            onClick={navHome}
            value="recents"
            icon={
              <HomeIcon
                sx={{ color: value === "recents" ? "blue" : "white" }} // faqat "recents" bo'lsa rangni o'zgartiradi
                fontSize="large"
              />
            }
          />
          <BottomNavigationAction
            label="Qidiruv"
            value="favorites"
            icon={
              <SearchIcon
                sx={{ color: value === "favorites" ? "blue" : "white" }} // "favorites" uchun rangni o'zgartiradi
                fontSize="large"
              />
            }
          />
          <BottomNavigationAction
            label="Savat"
            value="nearby"
            onClick={navuSub}
            icon={
              <Badge count={state.length}>
                <ShoppingCartIcon
                  sx={{ color: value === "nearby" ? "blue" : "white" }} // "nearby" uchun rangni o'zgartiradi
                  fontSize="large"
                />
              </Badge>
            }
          />
          <BottomNavigationAction
            label="Saralanganlar"
            value="folder"
            icon={
              <FavoriteIcon
                sx={{ color: value === "folder" ? "blue" : "white" }} // "folder" uchun rangni o'zgartiradi
                fontSize="large"
              />
            }
          />
          <BottomNavigationAction
            label="Kontakt"
            value="folder2"
            icon={
              <ContactMailIcon
                sx={{ color: value === "folder2" ? "blue" : "white" }} // "folder2" uchun rangni o'zgartiradi
                fontSize="large"
              />
            }
          />
        </BottomNavigation>
      ) : (
        <div className="container1 flex items-start justify-between">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="flex items-start justify-between w-[70%]">
            <div className="flex flex-col gap-2">
              <p className="text-[#FFF] text-[1.1em] ">Жанры</p>
              <a className="text-[#ADADAD] text-[0.9em]" href="#">
                Нонфикшн
              </a>
              <a className="text-[#ADADAD] text-[0.9em] " href="#">
                Псиология
              </a>
              <a className="text-[#ADADAD] text-[0.9em] " href="#">
                Бизнес
              </a>
              <a className="text-[#ADADAD] text-[0.9em] " href="#">
                Финансы
              </a>
              <a className="text-[#ADADAD] text-[0.9em] " href="#">
                Все
              </a>
              <a className="text-[#ADADAD] text-[0.9em] " href="#">
                жанры
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[#FFF] text-[1.1em]">Категории</p>
              <a className="text-[#ADADAD] text-[0.9em] " href="#">
                Популярное
              </a>
              <a className="text-[#ADADAD] text-[0.9em] " href="#">
                Новинки
              </a>
              <a className="text-[#ADADAD] text-[0.9em] " href="#">
                Выбор редакции
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[#FFF] text-[1.1em]">Разделы</p>
              <a className="text-[#ADADAD] text-[0.9em]" href="#">
                Как купить
              </a>
              <a className="text-[#ADADAD] text-[0.9em]" href="#">
                Часто задаваемые вопросы
              </a>
              <a className="text-[#ADADAD] text-[0.9em]" href="#">
                Сотрудничество
              </a>
              <a className="text-[#ADADAD] text-[0.9em]" href="#">
                Контакты
              </a>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
