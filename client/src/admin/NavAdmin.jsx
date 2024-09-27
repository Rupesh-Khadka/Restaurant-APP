import React, { useEffect } from "react";
import { FaEdit, FaList, FaSync, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setAdminToken } from "../store/modules/auth/adminLogin/action";

const NavAdmin = () => {
  const navigate = useNavigate();
  const adminToken = useSelector((state) => state.authAdminReducer.token);
  const dispatch = useDispatch();

  useEffect(() => {
    // @TODO: Decode JWT token & check token expiry to actually logout
    if (!adminToken) {
      localStorage.removeItem("token");
      dispatch(setAdminToken(undefined));
      navigate("/admin/login");
    }
  }, [adminToken]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setAdminToken(undefined));
  };

  return (
    <nav className='bg-gray-800 p-4 flex flex-wrap justify-between items-center'>
      <div className='text-white text-lg font-semibold mb-2 sm:mb-0'>
        <Link to={"/admin/all"}> Admin Panel</Link>{" "}
      </div>
      <div className='flex flex-wrap space-x-4'>
        <Link to={"/admin/all"}>
          <button
            className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full sm:w-auto mb-2 sm:mb-0'
            aria-label='View all items'>
            <FaList className='inline mr-2' /> All
          </button>
        </Link>
        <Link to={"/admin/add"}>
          <button
            className='bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 w-full sm:w-auto mb-2 sm:mb-0'
            aria-label='Add new item'>
            <FaPlus className='inline mr-2' /> Add
          </button>
        </Link>
        <Link to={"/admin/edit"}>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto mb-2 sm:mb-0'
            aria-label='Edit existing item'>
            <FaEdit className='inline mr-2' /> Edit
          </button>
        </Link>
        <Link to={"/admin/contact"}>
          <button
            className='bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 w-full sm:w-auto mb-2 sm:mb-0'
            aria-label='Add new item'>
            <FaPlus className='inline mr-2' /> Contact
          </button>
        </Link>
        <Link to={"/admin/order"}>
          <button
            className='bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-full sm:w-auto mb-2 sm:mb-0'
            aria-label='Manage orders'>
            <FaSync className='inline mr-2' /> Order
          </button>
        </Link>

        {adminToken ? (
          <button
            className='py-2 px-4 rounded-xl border-gray-200 border-2 text-white bg-red-500 font-bold transform transition-transform duration-300 hover:scale-110 cursor-pointer w-full sm:w-auto'
            onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
};

export default NavAdmin;
