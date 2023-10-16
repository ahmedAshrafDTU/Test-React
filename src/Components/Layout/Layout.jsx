import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Perant from "../perant/Perant";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
