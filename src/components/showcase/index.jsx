import React from "react";
import "./showcase.scss";
import "./showcase.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiperning CSS faylini to'g'ri import qilish
import Novinki from "../novinki";
import { useGetDataQuery } from "../../store/api/book-api";

// Swipper

function Showcase() {
  const { data } = useGetDataQuery();

  return (
    <section className="showcase">
      <div className="container">
        <Swiper
          spaceBetween={50} // slayderlar orasidagi masofa
          slidesPerView={1} // har safar ko‘rsatiladigan slayderlar soni
          navigation // navigatsiya tugmalari
          pagination={{ clickable: true }} // sahifa raqamlarini ko‘rsatish
          loop={true} // slayderlar aylanishi uchun
        >
          <SwiperSlide>
            <div className="all">
              <div className="text">
                <h1>Книги, которые вам хочется слушать</h1>
                <p>
                  Лучшая подборка аудиокниг по психологиии саморазвитию за все
                  годы издательства...
                </p>
              </div>
              <button className="button">Выбрать книгу</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="all">
              <div className="text">
                s<h1>Книги, которые вам хочется слушать</h1>
                <p>
                  Лучшая подборка аудиокниг по психологиии саморазвитию за все
                  годы издательства...
                </p>
              </div>
              <button className="button">Выбрать книгу</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="all">
              <div className="text">
                <h1>Книги, которые вам хочется слушать</h1>
                <p>
                  Лучшая подборка аудиокниг по психологиии саморазвитию за все
                  годы издательства...
                </p>
              </div>
              <button className="button">Выбрать книгу</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Showcase;
