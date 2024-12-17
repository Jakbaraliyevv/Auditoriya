import React from "react";
import "./novinki.scss";
import novinki from "../img/novinki.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiperning CSS faylini to'g'ri import qilish

function Novinki() {
  return (
    <section className="novinki">
      <div className="container">
        <div className="novinki__top">
          <h2> Новинки </h2>
          <button className="novinkiBtn">Смотреть все</button>
        </div>
        <div className="novinki__bottom">
          <Swiper
            spaceBetween={50} // slayderlar orasidagi masofa
            slidesPerView={5} // har safar ko‘rsatiladigan slayderlar soni
            navigation // navigatsiya tugmalari
            pagination={{ clickable: true }} // sahifa raqamlarini ko‘rsatish
            loop={true} // slayderlar aylanishi uchun
          >
            <SwiperSlide>
              <div className="novinciCard">
                <div className="img">
                  <img src={novinki} alt="" />
                </div>
                <div className="novinciCardText">
                  <p>Ульяна Соболева</p>
                  <h4>Завтра будет вчера</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="novinciCard">
                <div className="img">
                  <img src={novinki} alt="" />
                </div>
                <div className="novinciCardText">
                  <p>Ульяна Соболева</p>
                  <h4>Завтра будет вчера</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="novinciCard">
                <div className="img">
                  <img src={novinki} alt="" />
                </div>
                <div className="novinciCardText">
                  <p>Ульяна Соболева</p>
                  <h4>Завтра будет вчера</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="novinciCard">
                <div className="img">
                  <img src={novinki} alt="" />
                </div>
                <div className="novinciCardText">
                  <p>Ульяна Соболева</p>
                  <h4>Завтра будет вчера</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="novinciCard">
                <div className="img">
                  <img src={novinki} alt="" />
                </div>
                <div className="novinciCardText">
                  <p>Ульяна Соболева</p>
                  <h4>Завтра будет вчера</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="novinciCard">
                <div className="img">
                  <img src={novinki} alt="" />
                </div>
                <div className="novinciCardText">
                  <p>Ульяна Соболева</p>
                  <h4>Завтра будет вчера</h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Novinki;
