import React from "react";
import Background from "../Component/Background";
import Navbar from "../Component/Navbar";
import Signup from "./SignUp";
import Accordian from "../Component/Accordian";
import Footer from "../Component/Footer";
const Home = () => {
  return (
    <>
      <Background />
      <div className="content">
        <Navbar />
        <Signup />
      </div>
      <Accordian />
      <Footer />
    </>
  );
};
export default Home;
