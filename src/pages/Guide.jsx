import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content from "../components/Guide/Content";

const Guide = (props) => {
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default Guide;
