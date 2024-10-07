import React from "react";
import FoodCard from "./FoodCard";
 
function Drinks({items}) {
  const foodItems = [
    {
      image:
        "https://images.unsplash.com/photo-1551512700-46528e8b49be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      title: "Drinks",
      rating: 5,
      calories: 120,
      type: "Non - Veg",
      persons: 2,
      price: 499,
    },
    {
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd45b3d63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      title: "Chicken Grilled",
      rating: 4.5,
      calories: 80,
      type: "Non - Veg",
      persons: 1,
      price: 359,
    },
    {
      image:
        "https://images.unsplash.com/photo-1534308983250-e215ee660228?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      title: "Paneer Noodles",
      rating: 4,
      calories: 100,
      type: "Veg",
      persons: 2,
      price: 149,
    },
    {
        image:
          "https://images.unsplash.com/photo-1534308983250-e215ee660228?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
        title: "Paneer Noodles",
        rating: 4,
        calories: 100,
        type: "Veg",
        persons: 2,
        price: 149,
      },
      {
        image:
          "https://images.unsplash.com/photo-1534308983250-e215ee660228?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
        title: "Paneer Noodles",
        rating: 4,
        calories: 100,
        type: "Veg",
        persons: 2,
        price: 149,
      },
  ];
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center items-center bg-white p-4 rounded-lg'>
    {items.map((item) => (
      <FoodCard key={item.title} {...item} />
    ))}
  </div>
  );
}

export default Drinks;
