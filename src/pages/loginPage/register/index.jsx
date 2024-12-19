import { Input } from "antd";
import React, { useState } from "react";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getData = (e) => {
    const storData = JSON.parse(localStorage.getItem("register")) || [];

    e.preventDefault();
    const userData = {
      name,
      userName,
      email,
      password,
    };

    const findOldREgster = storData.find(
      (item) => item.email === userData.email
    );

    if (findOldREgster) {
      notification.error({
        message: "Oldin royxatdan o'tilgan",
      });
    } else {
      const updetaData = [...storData, userData];

      localStorage.setItem("register", JSON.stringify(updetaData));

      navigate("/");

      console.log(userData);
    }
  };

  return (
    <div className=" w-[100%] m-auto h-[100vh] flex items-center flex-col gap-7 justify-center max-[800px]:text-[0.9em] max-[700px]:text-[0.8em] max-[450px]:text-[0.7em] max-[600px]:text-[0.6em] max-[350px]:text-[0.5em]">
      <div className="w-[30%] h-auto py-[4em] px-[2em] bg-[#2A2A2A] rounded-lg max-[1210px]:w-[40%] max-[1000px]:w-[50%] max-[800px]:w-[60%] max-[600px]:w-[70%] max-[500px]:w-[80%] max-[450px]:w-[90%]">
        <h1 className="text-[#FFF] text-[1.6em] text-center pb-9">
          Create new profile
        </h1>

        <form onSubmit={getData} className="flex flex-col gap-5">
          <Input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="FirstName"
            className="w-full h-[35px] max-[450px]:h-[30px]"
          />
          <Input
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="LastName"
            className="w-full h-[35px] max-[450px]:h-[30px]"
          />
          <Input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            className="w-full h-[35px] max-[450px]:h-[30px]"
          />
          <Input.Password
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full h-[35px] max-[450px]:h-[30px]"
          />
          <button className="w-full bg-blue-500 h-[40px] rounded-lg text-[#FFF] text-[1.2em] max-[450px]:h-[30px]">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;
