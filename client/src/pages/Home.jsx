import React from "react";
import SecoundHome from "../components/Home/SecoundHome";
import FirstHome from "../components/Home/FirstHome";
import NewCarousel from "../components/partials/Carousel/NewCarousel";
import ThirdHome from "../components/Home/ThirdHome";

const Home = () => {
  return (
    <>
      <NewCarousel />
      <FirstHome />
      <SecoundHome />
      <ThirdHome />
    </>
  );
};

export default Home;
