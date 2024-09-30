// ClientDeliveryPage.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrder } from '../store/modules/order/reducer';  

const Delivery = () => {
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderReducer.order) || [];
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    getOrder(dispatch);
  }, [dispatch]);

  const handleSelectOrder = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div className='min-h-screen p-6'>
      <h1 className='text-2xl font-bold mb-6 text-center text-red-800'>
        My Orders
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* Order List */}
        <div className='bg-white p-4 rounded-lg shadow-md border border-red-300'>
          <h2 className='text-xl font-semibold mb-4 text-red-600'>Order List</h2>
          <div className='overflow-x-auto'>
            <table className='min-w-full bg-white border border-red-200'>
              <thead>
                <tr className='bg-red-100 border-b'>
                  <th className='py-2 px-4 text-left text-red-800'>Order ID</th>
                  <th className='py-2 px-4 text-left text-red-800'>Status</th>
                  <th className='py-2 px-4 text-left text-red-800'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.length === 0 ? (
                  <tr>
                    <td colSpan='3' className='py-4 text-center text-red-600'>
                      No orders available
                    </td>
                  </tr>
                ) : (
                  orderDetails.map((order) => (
                    <tr key={order._id} className='border-b hover:bg-red-50'>
                      <td className='py-2 px-4'>{order._id}</td>
                      <td className='py-2 px-4'>{order.status}</td>
                      <td className='py-2 px-4'>
                        <button
                          className='text-red-500 hover:underline'
                          onClick={() => handleSelectOrder(order)}>
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Order Details */}
        <div className='bg-white p-4 rounded-lg shadow-lg border border-red-300'>
          <h2 className='text-xl font-semibold mb-4 text-red-600'>Order Details</h2>
          {selectedOrder ? (
            <div className='space-y-2'>
              <h3 className='font-bold text-lg'>Order ID: {selectedOrder._id}</h3>
              <div>
                <strong className='text-red-600'>Status:</strong>
                <span className={`pl-2 ${selectedOrder.status === 'Completed' ? 'text-green-600' : 'text-red-600'}`}>
                  {selectedOrder.status}
                </span>
              </div>
              <div>
                <strong className='text-red-600'>Items:</strong>
                <ul className='list-disc pl-6'>
                  {selectedOrder.items.map((item) => (
                    <li key={item._id} className='py-1'>
                      <span className='font-semibold'>{item.quantity} x {item.item.title}</span> - <span className='text-red-500'>Rs {item.total}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <p className='text-red-600'>Select an order to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Delivery;
