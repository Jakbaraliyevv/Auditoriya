import React from "react";
import "./novinki.scss";
import novinki from "../img/novinki.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useGetDataQuery } from "../../store/api/book-api";

function Novinki() {
  const { data, loading } = useGetDataQuery();

  console.log(data);

  return (
    <section className="novinki">
      <div className="container">
        <div className="novinki__top">
          <h2> Новинки </h2>
          <button className="novinkiBtn">Смотреть все</button>
        </div>
        <div className="novinki__bottom">
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            loop={true}
          >
            {loading ? (
              <h1>Loading...</h1>
            ) : data?.length ? (
              data.map((value, index) => (
                <SwiperSlide key={index}>
                  <div className="novinciCard">
                    <div className="img">
                      <img src={value.img} alt={value.name} />
                    </div>
                    <div className="novinciCardText">
                      <p>{value.yozuvchi}</p>
                      <h4>{value.name}</h4>
                      <a
                        href={value.pdf}
                        target="blank"
                        rel=""
                        download // Bu PDF-ni yuklab olish uchun kerak
                      >
                        Pdf file yuklab olish
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))
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
