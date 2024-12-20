import React from "react";
import Navbar from "../navbar";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deletCard, increment, decrement } from "../../store/korzina-slice";
import savat from "../img/bosh.webp";
import { useNavigate } from "react-router-dom";
import Footer from "../footer";
function KorzinaComponents() {
  const getData = useSelector((state) => state.korzina.korzinaData);

  const dispatch = useDispatch();

  let totalPrice = getData.reduce((acc, value) => (acc += value.userPrice), 0);

  const navigate = useNavigate();

  const navi = () => {
    navigate("/home");
  };

  return (
    <>
      <Navbar />

      {getData.length ? (
        <section className="container1 ">
          <div className="mt-[120px] flex items-start justify-between w-[100%] gap-2 max-[1028px]:flex-col">
            <div className=" w-[80%] py-4 px-5 border-gray-500 border-[1px] rounded-lg">
              {getData.map((value) => (
                <div
                  key={value.id}
                  className="flex items-center justify-between gap-4 mt-[40px] max-[1111px]:text-[0.8em]"
                >
                  <div className="w-[60%] flex items-center gap-5">
                    <div className="">
                      <img
                        className="w-[250px] h-[220px]"
                        src={value.img}
                        alt=""
                      />
                    </div>
                    <div className="w-[100%] flex flex-col gap-3">
                      <p className="text-[rgb(114,114,116)] font-normal text-[1em]">
                        {value.yozuvchi}
                      </p>
                      <h3 className="text-[#FFF] font-bold text-[1.2em]">
                        {value.name}
                      </h3>
                      <p className="text-[#FFF] text-[1em]">{value.title}</p>
                    </div>
                  </div>

                  <div className="w-[40%] flex items-center justify-between gap-4">
                    <div className="w-[140px] flex items-center gap-2">
                      <Button
                        onClick={() => dispatch(decrement(value.id))}
                        className="text-[1.5em]"
                      >
                        -
                      </Button>
                      <span className="text-[#FFF] text-[1em] flex items-center justify-center w-[20px]">
                        {value.count}
                      </span>
                      <Button onClick={() => dispatch(increment(value.id))}>
                        +
                      </Button>
                    </div>

                    <div className=" flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <p className="text-[rgb(114,114,116)]">
                          <s>{value.old}</s>
                        </p>
                        <div className="flex items-center gap-7">
                          <p className="text-[#FFF] text-[1em]">Narxi :</p>
                          <h3 className="text-[#FFF] font-bold text-[1.2em]">
                            {value.userPrice}
                          </h3>
                        </div>
                      </div>
                      <Button
                        onClick={() => dispatch(deletCard(value.id))}
                        className="w-full h-[2.4em]"
                        type="primary"
                        danger
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-[19%] py-7 px-5 rounded-lg border-gray-500 border-[1px] flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <h2 className="text-[#FFF] font-bold text-[1.2em]">
                  Buyurtmangiz
                </h2>
                <div className="flex items-center justify-between">
                  <h2 className="text-[#FFF] text-[1.1em]">Jami:</h2>
                  <h4 className="text-[#FFF] font-bold text-[1.1em]">
                    {totalPrice}
                  </h4>
                </div>
              </div>
              <Button className="h-[2.4em]" type="primary">
                Sotib olish
              </Button>
            </div>
          </div>
        </section>
      ) : (
        <div className="w-[90%] m-auto h-[80vh] flex items-center justify-center max-[768px]:text-[0.8em]  max-[450px]:text-[0.7em]">
          <div className="flex items-center flex-col justify-center gap-7">
            <img className="w-[60%]" src={savat} alt="" />
            <h2 className="text-[#FFF] text-[1.2em] font-bold">
              Savatingiz hozircha bo‘sh
            </h2>
            <Button onClick={navi} className="w-full text-[1em]">
              Bosh sahifaga o'tish
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default KorzinaComponents;
