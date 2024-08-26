import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { PostRequest } from "../plugins/https";
import { setSignup } from "../store/modules/auth/signup/action";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await PostRequest("/auth/signup", formData);
      dispatch(setSignup(res.data));
      setFormData({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        agreeToTerms: false,
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message");
    }
  };

  return (
    <div className='bg-gray-100 flex items-center justify-center min-h-screen p-4'>
      <div className='max-w-md w-full bg-white shadow-md rounded-lg p-8'>
        <h2 className='text-2xl font-bold text-center text-red-600 mb-6'>
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='name' className='block text-gray-700 font-medium'>
              First Name
            </label>
            <input
              name='firstName'
              type='text'
              placeholder='John'
              value={formData.firstName}
              onChange={handleChange}
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
              required
            />
          </div>
          <div>
            <label htmlFor='name' className='block text-gray-700 font-medium'>
              Last Name
            </label>
            <input
              name='lastName'
              type='text'
              placeholder='Will  '
              value={formData.lastName}
              onChange={handleChange}
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
              required
            />
          </div>
          <div>
            <label
              htmlFor='confirmPassword'
              className='block text-gray-700 font-medium'>
              User Name
            </label>
            <input
              name='userName'
              type='text'
              placeholder='John Will'
              value={formData.userName}
              onChange={handleChange}
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
              required
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-gray-700 font-medium'>
              Email Address
            </label>
            <input
              name='email'
              type='email'
              placeholder='example@domain.com'
              value={formData.email}
              onChange={handleChange}
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
              required
            />
          </div>

          <div>
            <label
              htmlFor='password'
              className='block text-gray-700 font-medium'>
              Password
            </label>
            <input
              name='password'
              type='password'
              placeholder='********'
              value={formData.password}
              onChange={handleChange}
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
              required
            />
          </div>

          <div className='flex items-center mb-4'>
            <input
              name='agreeToTerms'
              type='checkbox'
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className='form-checkbox text-red-600'
              required
            />
            <label htmlFor='agreeToTerms' className='ml-2 text-gray-700'>
              I agree to the{" "}
              <a href='#' className='text-red-600 hover:underline'>
                Terms and Conditions
              </a>
            </label>
          </div>

          <button
            type='submit'
            className='w-full bg-red-600 text-white py-2 px-4 rounded-md font-bold transform transition-transform duration-300 hover:scale-105'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
