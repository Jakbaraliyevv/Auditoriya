import { Button, Input, message } from "antd";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
function Login() {
  // Navigate

  const navigate = useNavigate();

  const getPath = () => {
    navigate("/register");
  };

  const getUserEmail = useRef();
  const getUserPassWord = useRef();

  const getData = (e) => {
    const getData = JSON.parse(localStorage.getItem("register")) || [];

    e.preventDefault();
    const userData = {
      userName: getUserEmail.current.input.value,
      userPassWord: getUserPassWord.current.input.value,
    };

    const checkEmail = getData.find(
      (item) =>
        item.email === userData.userName &&
        item.password == userData.userPassWord
    );

    if (checkEmail) {
      navigate("/home");
    } else {
      notification.error({
        message: "Noto'gri parol",
      });
    }
  };

  return (
    <div className=" w-[100%] h-[100vh] flex items-center flex-col gap-7 justify-center  max-[450px]:text-[0.8em]">
      <div className="w-[30%] h-auto py-[4em] px-[2em] bg-[#2A2A2A] rounded-lg max-[1000px]:w-[40%] max-[800px]:w-[60%]  max-[600px]:w-[80%]  max-[400px]:w-[90%]">
        <h1 className="text-[#FFF] text-[1.6em] text-center pb-9">Login</h1>

        <form onSubmit={getData} className="flex flex-col gap-5">
          <Input
            ref={getUserEmail}
            type="email"
            placeholder="Email"
            className="w-full h-[35px] max-[450px]:h-[30px]"
            required
          />
          <Input.Password
            required
            ref={getUserPassWord}
            placeholder="Password"
            className="w-full h-[35px] max-[450px]:h-[30px]"
          />
          <button className="w-full bg-gray-500 h-[40px] rounded-lg text-[#FFF] text-[1.2em] max-[450px]:h-[30px]">
            Log in
          </button>
        </form>
      </div>
      <Button
        onClick={getPath}
        className="w-[30%] h-[40px] rounded-3xl bg-blue-500 text-[#FFF] text-[1.1em] border-none  max-[1000px]:w-[40%] max-[800px]:w-[60%]  max-[600px]:w-[80%]  max-[450px]:h-[30px]"
      >
        Yangi hisob qoshish
      </Button>
    </div>
  );
}

export default Login;
