import React from "react";
import "./novinki.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useGetDataQuery } from "../../store/api/book-api";
import Card from "../cards";

function Novinki() {
  const { data, loading } = useGetDataQuery();

  return (
    <section className="novinki">
      <div className="container">
        <div className="novinki__top">
          <h2> Yangi nashirlar </h2>
          <button className="novinkiBtn">Barchasini ko'rish</button>
        </div>
        <div className="novinki__bottom">
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              // Breakpoints responsivlikni sozlash
              0: {
                slidesPerView: 1, // Kichik ekran uchun 1 ta kartacha
                spaceBetween: 10,
              },
              334: {
                slidesPerView: 2, // 576px dan katta ekran uchun 2 ta kartacha
                spaceBetween: 15,
              },
              655: {
                slidesPerView: 3, // 768px dan katta ekran uchun 3 ta kartacha
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4, // 1024px dan katta ekran uchun 4 ta kartacha
                spaceBetween: 25,
              },
              1440: {
                slidesPerView: 5, // Katta ekran uchun 5 ta kartacha
                spaceBetween: 30,
              },
            }}
          >
            {loading ? (
              <h1 className="text-[#FFF]">Loading...</h1>
            ) : data?.length ? (
              data[0]["YangiNashirlar"].map((value, index) => {
                return (
                  <SwiperSlide key={index}>
                    {value ? <Card {...value} /> : <p>No data for this card</p>}
                  </SwiperSlide>
                );
              })
            ) : (
              <h1>No Data Available</h1>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Novinki;
