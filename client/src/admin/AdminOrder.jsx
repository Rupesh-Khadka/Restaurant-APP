import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavAdmin from "./NavAdmin";
import { getOrder } from "../store/modules/order/reducer";

const AdminOrder = () => {
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderReducer.order) || [];

  useEffect(() => {
    getOrder(dispatch);
  }, [dispatch]);


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
                    <th className='py-2 px-4 text-left text-red-800'>
                      Order ID
                    </th>
                    <th className='py-2 px-4 text-left text-red-800'>
                      Customer
                    </th>
                    <th className='py-2 px-4 text-left text-red-800'>Total</th>
                    <th className='py-2 px-4 text-left text-red-800'>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orderDetails.length === 0 ? (
                    <tr>
                      <td colSpan='4' className='py-4 text-center text-red-600'>
                        No orders available
                      </td>
                    </tr>
                  ) : (
                    orderDetails.map((order) => (
                      <tr key={order._id} className='border-b hover:bg-red-50'>
                        <td className='py-2 px-4'>{order._id}</td>
                        <td className='py-2 px-4'>{order.customer.name}</td>
                        <td className='py-2 px-4'>{order.totalAmount}</td>
                        <td className='py-2 px-4'>{order.status}</td>
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
            {orderDetails.length > 0 ? (
              orderDetails.map((order) => (
                <div key={order._id} className='mb-4'>
                  <h3 className='font-bold text-lg'>Order ID: {order._id}</h3>
                  <p>
                    <strong className='text-red-600'>Customer:</strong>{" "}
                    {order.customer.name}
                  </p>
                  <p>
                    <strong className='text-red-600'>Email:</strong>{" "}
                    {order.customer.email}
                  </p>
                  <p>
                    <strong className='text-red-600'>Number:</strong>{" "}
                    {order.customer.number}
                  </p>
                  <p>
                    <strong className='text-red-600'>Address:</strong>{" "}
                    {order.customer.address}
                  </p>
                  <p>
                    <strong className='text-red-600'>Total Amount:</strong>{" "}
                    {order.totalAmount}
                  </p>
                  <p>
                    <strong className='text-red-600'>Status:</strong>{" "}
                    {order.status}
                  </p>
                  <h4 className='font-bold mt-2'>Items:</h4>
                  <ul>
                    {order.items.map((item) => (
                      <li key={item._id}>
                        {item.quantity} x {item.item.title} - {item.total}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className='text-red-600'>No order details available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
