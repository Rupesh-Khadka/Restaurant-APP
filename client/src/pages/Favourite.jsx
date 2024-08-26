// src/MenuFirst.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodCard from "../assets/common/Menu/FoodCard";
import { getFavorites } from "../store/modules/fav/reducer";

const Favourite = () => {
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
                            <FoodCard
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                persons={item.persons}
                                price={item.price}
                            />
                            <button
                                onClick={() => handleRemoveFavorite(item._id)}
                                className='mt-2 bg-red-500 text-white p-2 rounded'>
                                Remove from Favorites
                            </button>
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
