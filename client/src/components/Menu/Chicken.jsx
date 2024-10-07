import React from "react";
import FoodCard from "./FoodCard";

function Chicken({items}) {
 
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center items-center bg-white p-4 rounded-lg'>
    {items.map((item) => (
      <FoodCard key={item.title} {...item} />
    ))}
  </div>
  );
}

export default Chicken;
