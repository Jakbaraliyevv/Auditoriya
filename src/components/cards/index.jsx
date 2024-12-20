import React from "react";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { addDoCard } from "../../store/korzina-slice";

function Card(data) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-2  max-[792px]:text-[0.8em] max-[435px]:text-[0.7em] max-[370px]:text-[0.6em] max-[334px]:text-[1em]">
      <div className="w-[100%]">
        <img
          className="w-full h-[280px] rounded-md max-[435px]:h-[220px]  max-[334px]:h-[300px]"
          src={data.img}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <div className="flex items-center justify-between">
            <p className="text-[#adadad] text-[1em]  font-light">
              {data.yozuvchi}
            </p>
            <button className="bg-transparent text-[1.2em]">
              <HeartOutlined className="text-[#FFF]" />
            </button>
          </div>
          <h4 className="text-[1em] text-[#FFF] font-medium">{data.name}</h4>
        </div>
        <span className="flex items-center gap-9  justify-between">
          <a
            className="text-[1em]  text-[#FFF] font-normal"
            href={data.pdf}
            target="blank"
            rel=""
            download // Bu PDF-ni yuklab olish uchun kerak
          >
            Pdf file yuklab olish
          </a>
        </span>

        <span className="flex items-center justify-between">
          <h3 className="text-[1em]  text-[#FFF] font-normal">122 So'm</h3>
          <Button
            onClick={() => {
              dispatch(addDoCard(data));
            }}
            className="!text-[1em] bg-transparent group hover:!bg-transparent"
          >
            <ShoppingCartOutlined className="text-[#FFF] group-hover:text-blue-500" />
          </Button>
        </span>
      </div>
    </div>
  );
}

export default Card;
