import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Burger from "./Burger";
import Pasta from "./Pasta";
import Pizza from "./Pizza";
import Drinks from "./Drinks";
import Chicken from "./Chicken";
import Dessert from "./Dessert";
import { getMenu } from "../../store/modules/menu/all/reducer";

const slides = [
  { id: 1, title: "Burger", content: (items) => <Burger items={items} /> },
  { id: 2, title: "Pasta", content: (items) => <Pasta items={items} /> },
  { id: 3, title: "Pizza", content: (items) => <Pizza items={items} /> },
  { id: 4, title: "Drinks", content: (items) => <Drinks items={items} /> },
  { id: 5, title: "Chicken", content: (items) => <Chicken items={items} /> },
  { id: 6, title: "Dessert", content: (items) => <Dessert items={items} /> },
];

const MenuFirst = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animation, setAnimation] = useState("");

  const goToSlide = (index) => {
    if (index === currentSlide) return;

    setAnimation("animate-slideOutLeft");
    setTimeout(() => {
      setCurrentSlide(index);
      setAnimation("animate-slideInRight");
    }, 500);
  };

  const dispatch = useDispatch();

  const foodItems = useSelector((state) => state.menuAllReducer.all) || [];

  useEffect(() => {
    getMenu(dispatch);
  }, [dispatch]);

  return (
    <div className="relative flex flex-col items-center p-4 max-w-6xl mx-auto mb-16 lg:pt-18 sm:pt-18 pt-36 ">
      <div className="absolute top-4 text-center space-x-4 z-10 pb-2 pt-8 flex-wrap md:flex-nowrap w-full justify-center ">
        <div className="w-full pl-4 text-start  pb-8 text-3xl md:text-4xl font-bold text-red-500">
          Our Menu
          <div className="text-black font-normal font-sans text-lg pt-4  text-start ">
            Discover a variety of dishes to suit every taste at BhooBites. From
            local favorites to international cuisines, our diverse menu offers
            something for everyone. Enjoy fresh, delicious meals delivered
            straight to your door. Explore our menu and satisfy your cravings
            today!
          </div>
        </div>
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`px-4  py-2 rounded-full mb-2 text-white transition-transform transform hover:scale-110  
                ${index === currentSlide ? "bg-red-500" : "bg-red-400"}`}
          >
            {slide.title}
          </button>
        ))}
      </div>
      <div
        className={`mt-32 text-xl font-semibold bg-gray-200 p-6 rounded-lg shadow-md w-full ${animation}`}
        style={{ minHeight: "300px" }}
      >
        {slides[currentSlide].content(
          foodItems.filter(
            (item) =>
              item.category.title.toLowerCase() ===
              slides[currentSlide].title.toLowerCase()
          )
        )}
      </div>

      <div className="mt-16 p-4 bg-white rounded-lg shadow-md w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Specials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center items-center bg-gray-100 p-4 rounded-lg">
          <p className="mb-4 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3">
            Check out our daily specials! From unique dishes crafted by our chef
            to seasonal ingredients, our specials menu is sure to delight your
            taste buds.
          </p>
          <ul className="list-disc pl-5 mb-4 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3">
            <li>Special Burger with Truffle Fries</li>
            <li>Gourmet Pizza with Fresh Mozzarella</li>
            <li>Handmade Pasta with Organic Tomatoes</li>
            <li>Grilled Chicken with Honey Glaze</li>
            <li>Refreshing Summer Drinks</li>
            <li>Decadent Desserts to End Your Meal</li>
          </ul>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold mb-2">
          Visit Us Today!
        </h3>
        <p>
          We are open daily from 11 AM to 11 PM. Come and enjoy a delightful
          meal at our restaurant. We look forward to serving you!
        </p>
      </div>
    </div>
  );
};

export default MenuFirst;
