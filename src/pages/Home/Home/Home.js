import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import ExtraPart from "../ExtraPart/ExtraPart";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ExtraPart></ExtraPart>
      <Footer></Footer>
    </div>
  );
};

export default Home;
