// AdminOrder.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavAdmin from './NavAdmin';
import { setStatus, setSelectedOrder } from '../store/modules/status/action';

const AdminOrder = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders || [] );// Adjust if needed based on your state shape
  const selectedOrderId = useSelector(state => state.selectedOrderId); // Adjust if needed
  const selectedOrder = orders.find(order => order.id === selectedOrderId);

  const handleStatusChange = (newStatus) => {
    if (selectedOrderId !== null) {
      dispatch(setStatus(selectedOrderId, newStatus));
    }
  };

  return (
    <div className='min-h-screen'>
      <NavAdmin />

      <div className='p-6'>
        <h1 className='text-2xl font-bold mb-6 text-center text-red-800'>
          Order Management
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Order Table */}
          <div className='bg-white p-4 rounded-lg shadow-md border border-red-300'>
            <h2 className='text-xl font-semibold mb-4 text-red-600'>
              Order List
            </h2>
            <div className='overflow-x-auto'>
              <table className='min-w-full bg-white border border-red-200'>
                <thead>
                  <tr className='w-full bg-red-100 border-b'>
                    <th className='py-2 px-4 text-left text-red-800'>Order ID</th>
                    <th className='py-2 px-4 text-left text-red-800'>Customer</th>
                    <th className='py-2 px-4 text-left text-red-800'>Total</th>
                    <th className='py-2 px-4 text-left text-red-800'>Status</th>
                    <th className='py-2 px-4 text-left text-red-800'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.length === 0 ? (
                    <tr>
                      <td colSpan='5' className='py-4 text-center text-red-600'>
                        No orders available
                      </td>
                    </tr>
                  ) : (
                    orders.map((order) => (
                      <tr key={order.id} className='border-b hover:bg-red-50'>
                        <td className='py-2 px-4'>{order.id}</td>
                        <td className='py-2 px-4'>{order.customer}</td>
                        <td className='py-2 px-4'>{order.total}</td>
                        <td className='py-2 px-4'>{order.status}</td>
                        <td className='py-2 px-4'>
                          <button
                            onClick={() => dispatch(setSelectedOrder(order.id))}
                            className='text-red-500 hover:underline'>
                            View Details
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
          <div className='bg-white p-6 rounded-lg shadow-lg border border-red-300'>
            <h2 className='text-xl font-semibold mb-4 text-red-600'>
              Order Details
            </h2>
            {selectedOrder ? (
              <div>
                <p>
                  <strong className='text-red-600'>Order ID:</strong>{" "}
                  {selectedOrder.id}
                </p>
                <p>
                  <strong className='text-red-600'>Customer:</strong>{" "}
                  {selectedOrder.customer}
                </p>
                <p>
                  <strong className='text-red-600'>Total:</strong>{" "}
                  {selectedOrder.total}
                </p>
                <p>
                  <strong className='text-red-600'>Status:</strong>{" "}
                  {selectedOrder.status}
                </p>
                <div className='justify-center flex items-center'>
                  <button
                    onClick={() => handleStatusChange("Ongoing")}
                    className='mr-2 text-yellow-500'>
                    Ongoing
                  </button>
                  <button
                    onClick={() => handleStatusChange("Delivered")}
                    className='ml-2 text-red-600'>
                    Delivered
                  </button>
                </div>
              </div>
            ) : (
              <p className='text-red-600'>Select an order to view details.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
