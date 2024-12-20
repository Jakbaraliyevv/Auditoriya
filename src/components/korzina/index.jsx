import React from "react";
import Navbar from "../navbar";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deletCard } from "../../store/korzina-slice";
function KorzinaComponents() {
  const getData = useSelector((state) => state.korzina.korzinaData);

  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <section className="container ">
        <div className="mt-[120px] flex items-start justify-between w-[100%]">
          <div className=" w-[80%] py-4 px-5 border-gray-500 border-[1px] rounded-lg">
            {getData.map((value) => (
              <div
                key={value.id}
                className="flex items-center justify-between mt-[40px]"
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

                <div className="w-[40%] flex items-center justify-between">
                  <div className="w-[140px] flex items-center gap-2">
                    <Button className="text-[1.5em]">-</Button>
                    <span className="text-[#FFF] text-[1em]">1</span>
                    <Button>+</Button>
                  </div>

                  <div className=" flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <p className="text-[rgb(114,114,116)]">
                        <s>{value.old}</s>
                      </p>
                      <div className="flex items-center gap-7">
                        <p className="text-[#FFF] text-[1em]">Narxi :</p>
                        <h3 className="text-[#FFF] font-bold text-[1.2em]">
                          {value.price}
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
                  umumiy qiymat
                </h4>
              </div>
            </div>
            <Button className="h-[2.4em]" type="primary">
              Sotib olish
            </Button>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default KorzinaComponents;
