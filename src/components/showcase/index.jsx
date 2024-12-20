import React from "react";
import "./showcase.scss";
import Novinki from "../novinki";
import { useGetDataQuery } from "../../store/api/book-api";

// Swipper

function Showcase() {
  const { data } = useGetDataQuery();

  return (
    <section className="showcase">
      <div className="container1">
        <div className="all">
          <div className="text">
            <h1>Siz tinglashni istagan kitoblar</h1>
            <p>
              Barcha yillar davomida nashr etilgan psixologiya va o'zini
              rivojlantirish bo'yicha eng yaxshi audiokitoblar to'plami...
            </p>
          </div>
          <button className="button">Kitobni tanlash</button>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
