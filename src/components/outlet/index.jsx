import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Login from "../../pages/loginPage/login";
import Footer from "../footer";
function Layout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
