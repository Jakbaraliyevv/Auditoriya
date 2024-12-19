import React from "react";
import img from "../img/novinki.png";
import { HeartOutlined } from "@ant-design/icons";
function Card(data) {
  return (
    // <section className="container flex items-start justify-between">
    <div className="flex flex-col gap-2 max-[435px]:text-[0.8em] max-[370px]:text-[0.7em] max-[334px]:text-[1em]">
      <div className="w-[100%]">
        <img
          className="w-full h-[280px] rounded-md max-[435px]:h-[220px]  max-[334px]:h-[300px]"
          src={data.img}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-[#adadad] text-[1em]  font-light">
            {data.yozuvchi}
          </p>
          <h4 className="text-[1em] text-[#FFF] font-medium">{data.name}</h4>
        </div>
        <span className="flex items-center gap-9">
          <a
            className="text-[1em]  text-[#FFF] font-normal"
            href={data.pdf}
            target="blank"
            rel=""
            download // Bu PDF-ni yuklab olish uchun kerak
          >
            Pdf file yuklab olish
          </a>
          <button className="bg-transparent">
            <HeartOutlined className="text-[#FFF]" />
          </button>
        </span>
      </div>
    </div>

    // </section>
  );
}

export default Card;
