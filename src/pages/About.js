import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";

export default function About() {
  return (
    <>
      {/* header */}
      <div class="header_box">
        <Header></Header>
      </div>

      {/* breadcrumb */}
      <Breadcrumb></Breadcrumb>

      {/* main */}

      {/* footer */}
      <footer class="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}
