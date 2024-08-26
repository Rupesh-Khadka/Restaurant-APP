import React, { useEffect, useState } from "react";
import axios from "axios";
import NavAdmin from "./NavAdmin";
import { GetRequest } from "../plugins/https";

const AdminAdd = () => {
  const [Food, setFood] = useState({
    image:"",
    title: "",
    description: "",
    category: "",
    person: "",
    price: "",
  });
  const [Foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [successMessage, setSuccessMessage] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 

  useEffect(() => {
    getFoods();
    getCategories();
  }, []);

  const handleInput = (event) => {
    setFood({
      ...Food,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/menu", Food);
      setFoods([...Foods, res.data.data]);
      setFood({
        image:"",
        title: "",
        description: "",
        category: "",
        person: "",
        price: "",
      });
      setSuccessMessage("Food item added successfully!");
      setErrorMessage("");
      setTimeout(() => setSuccessMessage(""), 2000);
    } catch (error) {
      console.error("Error adding food:", error);
      setErrorMessage("There was an error adding the food item.");
      setSuccessMessage("");
    }
  };

  const getFoods = async () => {
    try {
      const res = await GetRequest("/menu");
      setFoods(res.data);
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };

  const getCategories = async () => {
    try {
      const res = await GetRequest("/category");
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <div>
      <NavAdmin />
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='w-full max-w-lg p-8 bg-white shadow-lg rounded-lg'>
          <h2 className='text-3xl font-bold text-center text-red-600 mb-6'>
            Add Food Items
          </h2>

          {successMessage && (
            <div className='mb-4 p-4 bg-green-50 border border-green-200 text-green-800 rounded-md shadow-md transition-opacity duration-500 ease-in-out opacity-100'>
              <svg
                className='w-5 h-5 inline mr-2'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className='mb-4 p-4 bg-red-50 border border-red-200 text-red-800 rounded-md shadow-md'>
              <svg
                className='w-5 h-5 inline mr-2'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Image URL
              </label>
              <input
                className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500'
                type='text'
                name='image'
                onChange={handleInput}
                value={Food.image}
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Title
              </label>
              <input
                className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500'
                type='text'
                name='title'
                onChange={handleInput}
                value={Food.title}
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1 '>
                Description
              </label>
              <textarea
                className='w-full px-4 py-2 h-32 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500'
                name='description'
                onChange={handleInput}
                value={Food.description}
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Category
              </label>
              <select
                className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500'
                name='category'
                onChange={handleInput}
                value={Food.category}>
                <option value=''>--Select Category--</option>
                {categories?.map((v) => (
                  <option key={v._id} value={v._id}>
                    {v.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Person
              </label>
              <input
                className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500'
                type='number'
                name='person'
                onChange={handleInput}
                value={Food.person}
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Price
              </label>
              <input
                className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500'
                type='number'
                name='price'
                onChange={handleInput}
                value={Food.price}
              />
            </div>
            <button
              type='submit'
              className='w-full bg-red-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
              Add Food
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAdd;
