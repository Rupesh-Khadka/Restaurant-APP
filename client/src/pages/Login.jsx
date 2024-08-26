import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PostRequest } from "../plugins/https";
import { useDispatch } from "react-redux";
import { setToken } from "../store/modules/auth/login/action";

const Login = () => {
  const [UserDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleInput = (event) => {
    setUserDetails({
      ...UserDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await PostRequest("/auth/login", UserDetails);
      localStorage.setItem("frontendToken", res.data.token);
      dispatch(setToken(res.data.token));
      navigate("/menu");
    } catch (error) {
      alert("Invalid email and password");
    }
  };

  return (
    <div className='flex flex-col lg:flex-row h-screen overflow-auto'>
      <div className='lg:w-1/2 flex items-center justify-center'>
        <img
          className='w-full h-full object-cover'
          src='https://as1.ftcdn.net/v2/jpg/03/51/02/46/1000_F_351024629_rLpndkX5ngFjDlyRYkrhsHfsphjR5KAn.jpg'
          alt='Food delivery service'
        />
      </div>
      <div className='lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-12'>
        <div className='text-2xl lg:text-4xl text-red-500 font-semibold font-sans text-center'>
          Welcome back
        </div>
        <div className='pt-2 text-base lg:text-lg text-gray-400 text-center'>
          Welcome back! Please enter your details.
        </div>
        <form className='pt-6 w-full max-w-sm' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block pb-2 text-gray-700 font-medium'>
              Email
            </label>
            <input
              className='w-full px-4 py-2 border rounded-md'
              type='email'
              name='email'
              placeholder='Enter your email'
              onChange={handleInput}
              value={UserDetails.email}
              required
            />
          </div>
          <div className='mb-6'>
            <label className='block pb-2 text-gray-700 font-medium'>
              Password
            </label>
            <input
              className='w-full px-4 py-2 border rounded-md'
              type='password'
              name='password'
              placeholder='Enter your password'
              onChange={handleInput}
              value={UserDetails.password}
              required
            />
          </div>
          <button
            type='submit'
            className='w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600'>
            Login
          </button>
        </form>
        <div className='pt-3 text-base lg:text-lg text-gray-400 text-center'>
          or
        </div>
        <div className='pt-2 text-base lg:text-lg text-gray-400 text-center'>
          Don't have an account?{" "}
          <Link to={"/signup"} className='text-red-600'>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
