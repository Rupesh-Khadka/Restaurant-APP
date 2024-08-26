import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setContact } from "../store/modules/contact/action";
import { PostRequest } from "../plugins/https";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await PostRequest('/contact', formData);
      dispatch(setContact(res.data));
      setFormData({
        name: "",
        number: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message");
    }
  };

  return (
    <div
      className='relative flex items-center justify-center min-h-screen bg-cover bg-center'
      style={{
        backgroundImage:
          "url('https://img.pikbest.com/wp/202405/fast-food-restaurant-cartoon-3d-rendered-for-a_9829583.jpg!w700wp')",
        backdropFilter: "blur(8px)",
      }}>
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      <div className='relative bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-lg'>
        <h1 className='text-red-600 text-3xl font-bold mb-4'>Contact Us</h1>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name' className='block text-gray-700'>
              Name
            </label>
            <input
              name='name'
              type='text'
              value={formData.name}
              onChange={handleChange}
              id='name'
              className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500'
            />
          </div>
          <div>
            <label htmlFor='number' className='block text-gray-700'>
              Contact Number
            </label>
            <input
              name='number'
              type='text'
              value={formData.number}
              onChange={handleChange}
              id='number'
              className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-gray-700'>
              Email
            </label>
            <input
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              id='email'
              className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500'
            />
          </div>

          <div>
            <label htmlFor='message' className='block text-gray-700'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              value={formData.message}
              onChange={handleChange}
              className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500'
              rows='4'></textarea>
          </div>
          <button
            type='submit'
            className='w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
