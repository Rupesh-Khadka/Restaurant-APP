import { SiCodechef } from "react-icons/si";
import React from "react";
import coffee from "../../assets/Images/coffee.jpg";
import { Link } from "react-router-dom";
const FirstHome = () => {
  return (
    <div className='lg:flex lg:mt-8 '>
      <div className=''>
        <img
          className='h-full  w-full flex justify-center align-center'
          src={coffee}
          alt=''
          srcset=''
        />
      </div>
      <div className='lg:w-1/2 lg:pl-12 pt-7 mb-8'>
        <div className='text-4xl font-sans pt-20 font-bold text-center lg:text-left text-wrap '>
          Welcome To Our Restaurant
        </div>
        <div className='text-center lg:text-left w-full  px-8 lg:px-0 lg:w-4/5 text-lg text-gray-600 pt-6 '>
          Welcome, wher we believe that food is more than jst sustenance. It's
          an experience. Our menu features a variety of dishes that are expertlt
          prepared with fresh, locally sourced ingerident and served in a warm
          and inviting atmosphere.
        </div>
        <div className='flex flex-wrap items-center justify-center lg:justify-start'>
        <div className='text-center flex justify-center  mt-12 p-4 text-md rounded-md bg-red-500 text-white  font-semibold w-28   hover:text-black hover:bg-slate-300 transition duration-300 ease-in-out  '>
          <button className='transform transition-transform duration-300 hover:scale-105 cursor-pointer'  type="button"><Link to = {"/aboutus"}>Read More</Link></button>
          </div>
        </div>
       
        <div className='flex md:flex-wrap md:w-full  justify-center items-center px-8 lg:px-0 lg:w-4/5 lg:justify-start lg:flex-wrap  lg:mr-6 lg:pt-8 pt-12'>
          <div className='text-center    bg-gray-200 w-44  h-44 lg:w-36 lg:mt-4  p-4 justify-center flex align-middle flex-col lg:mr-6 rounded-sm border-8 '>
            <div className='text-yellow-500 text-6xl  justify-center flex align-middle'>
              <SiCodechef />
            </div>
            <div className='text-md text-gray-600 pt-4  font-medium '>
              Quality Food
            </div>
          </div>
          <div className='text-center   bg-gray-200 w-44  h-44 lg:w-36 lg:mt-4  p-4  justify-center flex align-middle flex-col mx-6 lg:mr-6 lg:mx-0 rounded-sm'>
            <div className='text-yellow-500 text-6xl justify-center flex align-middle'>
              <SiCodechef />
            </div>
            <div className='text-md text-gray-600 pt-4 font-medium   '>
              Food & Drinks
            </div>
          </div>
          <div className='text-center   bg-gray-200 w-44  h-44  lg:w-36 lg:mt-4 p-4 justify-center flex align-middle flex-col rounded-sm'>
            <div className='text-yellow-500 text-6xl  justify-center flex align-middle'>
              <SiCodechef />
            </div>
            <div className='text-md text-gray-600 pt-4 font-medium '>
              Expert Chef
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstHome;
