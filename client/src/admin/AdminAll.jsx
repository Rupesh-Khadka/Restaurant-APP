import React, { useEffect } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import NavAdmin from "./NavAdmin";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../store/modules/menu/all/reducer";
import { setEdit } from "../store/modules/menu/edit/action";
import { DeleteRequest } from "../plugins/https";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminAll = () => {
  const dispatch = useDispatch();
  const foodItems = useSelector((state) => state.menuAllReducer.all) || [];

  useEffect(() => {
    getMenu(dispatch);
  }, [dispatch]);

  const navigate = useNavigate();

  const groupedItems = foodItems.reduce((prev, item) => {
    const category = item.category.title || "Uncategorized";
    if (!prev[category]) {
      prev[category] = [];
    }
    prev[category].push(item);
    return prev;
  }, {});

  const handleEdit = (id) => {
    // Find the item by its id from the foodItems array
    const itemToEdit = foodItems.find((item) => item._id === id);
    if (itemToEdit) {
      dispatch(setEdit(itemToEdit)); // Dispatch the entire item object
      navigate(`/admin/edit`); // Navigate to the edit page
    } else {
      console.error("Item not found");
    }
  };

  const handleDelete = async (id) => {
    try {
      await DeleteRequest(`/menu/${id}`);
      toast.success("Item deleted successfully!");
      getMenu(dispatch);
    } catch (error) {
      toast.error("Failed to delete item. Please try again.");
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div>
      <NavAdmin />
      <ToastContainer />
      
      <div className='p-4 sm:p-6 min-h-screen bg-gray-100'>
        <header className='mb-8 text-center '>
          <h1 className='text-3xl sm:text-4xl font-extrabold text-red-600'>
            Manage Food Items
          </h1>
          <p className='text-md sm:text-lg text-gray-700 mt-2'>
            View, edit, and delete items categorized for easy management.
          </p>
        </header>
        <div className='flex justify-center mb-8'>
          <Link
            to='/admin/add'
            className='bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-red-700 transform hover:scale-105 transition-transform'>
            <FaPlus className='inline mr-2' /> Add New Items
          </Link>
        </div>
        <div className='space-y-8 mx-4 sm:mx-14  bg-slate-200 p-4 rounded-lg'>
          {Object.keys(groupedItems).map((category) => (
            <div key={category} className='bg-white shadow-lg rounded-lg'>
              <h2 className='bg-red-600 text-white text-lg sm:text-2xl font-semibold p-4 text-center'>
                {category}
              </h2>
              <table className='w-full border-collapse text-sm sm:text-base '>
                <thead>
                  <tr className='bg-gray-100'>
                    <th className='border p-3 text-left'>Item Name</th>
                    <th className='border p-3 text-left'>Price</th>
                    <th className='border p-3 text-left'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedItems[category].map((item) => (
                    <tr key={item._id} className='hover:bg-gray-50'>
                      <td className='border p-3'>{item.title}</td>
                      <td className='border p-3'>Rs. {item.price}</td>
                      <td className='border p-3'>
                        <button
                          onClick={() => handleEdit(item._id)}
                          className='text-red-600 hover:text-red-800 hover:underline mr-4'>
                          <FaEdit className='inline mr-2' /> Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className='text-red-700 hover:text-red-900 hover:underline'>
                          <FaTrash className='inline mr-2' /> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminAll;
