import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createOrder } from "../store/modules/order/reducer";

const OrderPage = () => {
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    address: "",
    number: "",
  });
  const [items, setItems] = useState([]);

  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menuAllReducer.all) || []; // contains all menu items
  const order = useSelector((state) => state.orderReducer.menuId) || [];
  const reduxToken = useSelector((state) => state.authReducer.token);

  // Filter and map menu items based on the order array
  const orderItems = menu
    .filter((menuItem) => order.includes(menuItem._id))
    .map((item) => ({ ...item, quantity: 1 }));

  useEffect(() => {
    setItems(orderItems);
  }, [order, menu]);

  const handleQuantityChange = (id, delta) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!items.length || items.every(item => item.quantity <= 0)) {
      toast.error("Cannot place an order with zero items.");
      return;  
  }
    try {
      const orderItems = items.map((item) => ({
        _id: item._id,   
        quantity: item.quantity,
      }));
      console.log("The order to be submitted:", orderItems, customerDetails);
      
      await createOrder(dispatch, orderItems, customerDetails);
  
      toast.success("Order created successfully!");
      //Reset the customer details
      setCustomerDetails({ name: "", email: "", address: "", number: "" });
      setItems([]);
    } catch (error) {
      toast.error("Failed ordering food. Please try again");
    }
  };

  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <div className='bg-white shadow-lg rounded-lg p-6'>
        <h1 className='text-3xl font-bold text-red-600 mb-6'>Order Summary</h1>

        {reduxToken ? ( // Check if reduxToken exists
          <div className='mb-6'>
            <h2 className='text-2xl font-semibold text-red-600 mb-4'>Items</h2>
            <ul className='space-y-4'>
              {items.map((item) => (
                <li
                  key={item._id}
                  className='flex justify-between items-center p-4 border border-gray-200 rounded-lg'>
                  <div className='flex-1'>
                    <span className='font-medium text-gray-800'>
                      {item.title}
                    </span>
                  </div>
                  <div className='flex items-center space-x-2 mr-6'>
                    <button
                      aria-label='Decrease quantity'
                      onClick={() => handleQuantityChange(item._id, -1)}
                      className='p-2 px-3 bg-red-200 mr-2 text-lg font-bold text-red-600 rounded-md hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-500'>
                      -
                    </button>
                    <span className='text-gray-600 mr-2'>{item.quantity}</span>
                    <button
                      aria-label='Increase quantity'
                      onClick={() => handleQuantityChange(item._id, 1)}
                      className='p-2 px-3 bg-red-200 text-lg font-bold text-red-600 rounded-md hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-500'>
                      +
                    </button>
                  </div>
                  <span className='text-gray-600 ml-8'>
                    Rs. {item.quantity * item.price}
                  </span>
                </li>
              ))}
            </ul>
            <div className='flex justify-between font-semibold text-lg mt-4 border-t border-gray-200 pt-4'>
              <span className='text-red-600'>Total:</span>
              <span className='text-gray-800'>Rs. {calculateTotal()}</span>
            </div>
          </div>
        ) : (
          <div className='mb-6 text-red-600'>
            <p>Please log in to place your order.</p>
          </div>
        )}

        {reduxToken && ( // Show form only if token exists
          <form onSubmit={handleSubmit} className='mt-6'>
            <h2 className='text-2xl font-semibold text-red-600 mb-4'>
              Delivery Information
            </h2>
            <div className='mb-4'>
              <label
                className='block text-sm font-medium text-gray-700 mb-2'
                htmlFor='name'>
                Name
              </label>
              <input
                type='text'
                id='name'
                value={customerDetails.name}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    name: e.target.value,
                  })
                }
                className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                required
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-sm font-medium text-gray-700 mb-2'
                htmlFor='email'>
                Email
              </label>
              <input
                type='email'
                id='email'
                value={customerDetails.email}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    email: e.target.value,
                  })
                }
                className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                required
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-sm font-medium text-gray-700 mb-2'
                htmlFor='address'>
                Address
              </label>
              <textarea
                id='address'
                value={customerDetails.address}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    address: e.target.value,
                  })
                }
                className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                rows='4'
                required
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-sm font-medium text-gray-700 mb-2'
                htmlFor='number'>
                Contact Number
              </label>
              <input
                type='tel'
                id='number'
                value={customerDetails.number}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    number: e.target.value,
                  })
                }
                className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                required
              />
            </div>
            <button
              type='submit'
              className='bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105'>
              Place Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
