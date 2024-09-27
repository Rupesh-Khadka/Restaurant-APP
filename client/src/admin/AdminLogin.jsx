import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAdminToken } from "../store/modules/auth/adminLogin/action";
import { useNavigate } from "react-router";
import { PostRequest } from "../plugins/https";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [admindDetails, setadminDetails] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const [error , setError] = useState();

  const handleInput = (event) => {
    setadminDetails({
      ...admindDetails,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await PostRequest("/auth/admin/login", admindDetails);
      localStorage.setItem("admintoken", res.data.token);
      dispatch(setAdminToken(res.data.token));
      setError("");
      navigate('/admin/all');
    } catch (error) {
      setError("Invalid email and password");
    }
  };


  return (
    <div className='flex items-center justify-center min-h-screen '>
      <div className='w-full max-w-md p-8 bg-white shadow-lg rounded-lg'>
        <h1 className='text-2xl font-semibold text-center mb-6 text-red-700'>
          Admin Login
        </h1>
        {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              onChange={handleInput}
              className='mt-1 block w-full px-3 py-2 border border-red-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              onChange={handleInput}
              className='mt-1 block w-full px-3 py-2 border border-red-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
