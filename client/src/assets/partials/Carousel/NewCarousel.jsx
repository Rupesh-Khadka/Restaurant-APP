import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";

const NewCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Carousel
    
    controlSize={50}
      withIndicators
      height='92vh'
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      slideSize='100%'
      loop
      classNames={{
        root: "relative   overflow-hidden",
        indicator: "bg-gray-500  rounded-full w-4 h-4 cursor-pointer",
        indicators:
          "absolute bottom-4 w-full flex justify-center space-x-2 p-4",
        slide:
          "flex items-center justify-center bg-gray-100   shadow-md",
      }}
      styles={{
        control:{
          backgroundColor:"transparent",
          color:"white",
        },
        indicator: {
          "&[data-active]": {
            backgroundColor: "black",
          },
        },
      }}>
      <Carousel.Slide
        className='flex items-center justify-center bg-cover bg-center'
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2023/10/20/17/30/hamburger-8329939_1280.jpg)",
        }}></Carousel.Slide>
      <Carousel.Slide
        className='flex items-center justify-center bg-cover bg-center'
        style={{
          backgroundImage:
            "url( https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg)",
        }}></Carousel.Slide>
      <Carousel.Slide
        className='flex items-center justify-center bg-cover bg-center'
        style={{
          backgroundImage:
            "url(https://png.pngtree.com/thumb_back/fw800/background/20240204/pngtree-top-view-of-chicken-biryani-indian-food-delicious-ramadan-iftar-meal-image_15585911.png)",
        }}></Carousel.Slide>
    </Carousel>
  );
};

export default NewCarousel;
