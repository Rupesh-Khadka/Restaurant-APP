// src/MenuFirst.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../store/modules/fav/reducer";
import { AiOutlineHeart } from "react-icons/ai";

const Favourite = ({ _id, image, title, description, person, price }) => {
  const dispatch = useDispatch();
  const foodItems = useSelector((state) => state.favReducer.items);

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  const handleRemoveFavorite = (id) => {
    // dispatch(removeFavorite(id));
  };

  return (
    <div className='flex flex-col items-center p-4 max-w-6xl mx-auto mb-16 lg:pt-12 sm:pt-10 pt-12'>
      <div className='w-full text-center pb-8 text-3xl font-bold text-red-500'>
        Your Favorites
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center items-center bg-gray-100 p-4 rounded-lg'>
        {foodItems.length > 0 ? (
          foodItems.map((item) => (
            <div key={item._id} className='p-4'>
              <div className='bg-white rounded-lg shadow-lg p-4 md:p-5 flex flex-col justify-between w-full max-w-xs mx-auto transition-transform transform hover:scale-105 hover:shadow-xl'>
                <div className='flex flex-col items-center'>
                  <img
                    src={item.image}
                    alt={`Image of ${title}`}
                    className='w-36 h-32 md:w-46 md:h-40 rounded-lg object-cover transition-transform transform hover:scale-110'
                  />
                  <h3 className='text-xl md:text-2xl font-semibold mt-2 md:mt-3 text-red-800 text-center'>
                    {item.title}
                  </h3>
                </div>
                <div className='flex flex-col gap-2 mt-3 md:mt-4'>
                  <div className='flex gap-2 md:gap-4 items-center'>
                    <p className='text-red-700 text-sm md:text-base font-medium text-top'>
                      Description:
                    </p>
                    <p className='text-sm md:text-base text-gray-700'>
                      {item.description}
                    </p>
                  </div>
                  <div className='flex gap-2 md:gap-4 items-center'>
                    <p className='text-red-700 text-sm md:text-base font-medium'>
                      Person:
                    </p>
                    <p className='text-sm md:text-base text-gray-700'>
                      {item.person}
                    </p>
                  </div>
                  <div className='flex justify-between items-center mt-3 md:mt-4'>
                    <p className='text-lg md:text-xl font-bold text-red-800'>
                      Rs. {item.price}
                    </p>
                    <div className='flex items-center'>
                      <button className='bg-red-600 onclick={} hover:bg-red-700 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded-full transition-transform transform hover:scale-105'>
                        +
                      </button>

                      <button
                       
                        className='text-red-600 text-2xl md:text-3xl hover:text-red-500 transition-transform transform hover:scale-105 ml-2'>
                        <AiOutlineHeart />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center text-lg'>No favorites added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favourite;
