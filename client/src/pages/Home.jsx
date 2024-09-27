import React from "react";
import NewCarousel from "../assets/partials/Carousel/NewCarousel";
import SecoundHome from "../assets/common/Home/SecoundHome";
import FirstHome from "../assets/common/Home/FirstHome";

const Home = () => {
  return (
    <div>
      <NewCarousel />
      <FirstHome />
      <SecoundHome />
    </div>
  );
};

export default Home;
