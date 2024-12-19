import React from "react";
// import ".";
import "../novinki/novinki.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useGetDataQuery } from "../../store/api/book-api";
import Card from "../cards";

function Rus() {
  const { data, loading } = useGetDataQuery();

  return (
    <section className="novinki">
      <div className="container">
        <div className="novinki__top">
          <h2> Rus tilida </h2>
          <button className="novinkiBtn">Barchasini ko'rish</button>
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
              <h1 className="text-[#FFF]">Loading...</h1>
            ) : data?.length ? (
              data[2]["YangiNashirlar3"].map((value, index) => {
                console.log(value);
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

export default Rus;
