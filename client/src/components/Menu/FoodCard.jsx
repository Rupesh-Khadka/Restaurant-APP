import React from "react";
import { jwtDecode } from "jwt-decode";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createFavorite } from "../../store/modules/fav/reducer";
import { setMenuId } from "../../store/modules/order/action";

function FoodCard({ _id, image, title, description, person, price }) {
  const dispatch = useDispatch();
  const reduxToken = useSelector((state) => state.authReducer.token);
  const userId = reduxToken ? jwtDecode(reduxToken).id : null;

  const orderItem = async () => {
    if (reduxToken && userId) {
      try {
        dispatch(setMenuId(_id));
        toast.success("Item added to cart");
      } catch (error) {
        console.log("Error in adding to order ");
      }
    } else {
      toast.error("Please Log in to order.")
    }
  };

  const addToFavorite = async () => {
    if (reduxToken && userId) {
      try {
        await createFavorite(dispatch, _id);
        toast.success("Item added to Favourite");
      } catch (error) {
        console.log("Error in adding to fav items");
      }
    } else {
      alert("Please Log in ");
    }
  };

  return (
    <div className='bg-white rounded-lg shadow-lg p-4 md:p-5 flex flex-col justify-between w-full max-w-xs mx-auto transition-transform transform hover:scale-105 hover:shadow-xl'>
      <div className='flex flex-col items-center'>
        <img
          src={image}
          alt={`Image of ${title}`}
          className='w-36 h-32 md:w-46 md:h-40 rounded-lg object-cover transition-transform transform hover:scale-110'
        />
        <h3 className='text-xl md:text-2xl font-semibold mt-2 md:mt-3 text-red-800 text-center'>
          {title}
        </h3>
      </div>
      <div className='flex flex-col gap-2 mt-3 md:mt-4'>
        <div className='flex gap-2 md:gap-4 items-center'>
          <p className='text-red-700 text-sm md:text-base font-medium text-top'>
            Description:
          </p>
          <p className='text-sm md:text-base text-gray-700'>{description}</p>
        </div>
        <div className='flex gap-2 md:gap-4 items-center'>
          <p className='text-red-700 text-sm md:text-base font-medium'>
            Person:
          </p>
          <p className='text-sm md:text-base text-gray-700'>{person}</p>
        </div>
        <div className='flex justify-between items-center mt-3 md:mt-4'>
          <p className='text-lg md:text-xl font-bold text-red-800'>
            Rs. {price}
          </p>
          <div className='flex items-center'>
            <button
              onClick={orderItem}
              className='bg-red-600 onclick={} hover:bg-red-700 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded-full transition-transform transform hover:scale-105'>
              +
            </button>
            {reduxToken && (
              <button
                onClick={addToFavorite}
                className='text-red-600 text-2xl md:text-3xl hover:text-red-500 transition-transform transform hover:scale-105 ml-2'>
                <AiOutlineHeart />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
