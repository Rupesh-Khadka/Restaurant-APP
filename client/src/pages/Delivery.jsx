import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserOrder } from "../store/modules/order/reducer";
import { DeleteRequest } from "../plugins/https";
import {
  FaEye,
  FaTrashAlt,
  FaCheckCircle,
  FaClock,
  FaClipboardCheck,
} from "react-icons/fa"; // Import icons

const Delivery = () => {
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderReducer.order) || [];
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    getUserOrder(dispatch);
  }, [dispatch]);

  const handleSelectOrder = (order) => {
    setSelectedOrder(order);
  };

  const handleCancelOrder = async (orderId) => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      try {
        await DeleteRequest(`/orders/${orderId}`);
        getUserOrder(dispatch);
      } catch (error) {
        console.error("Error canceling the order:", error);
      }
    }
  };

  const statusColors = {
    Pending: "text-yellow-600",
    Ongoing: "text-blue-600",
    Completed: "text-green-600",
    Delivered: "text-red-600",
  };

  const statusIcons = {
    Pending: <FaClock className='text-yellow-600' />,
    Ongoing: <FaClipboardCheck className='text-blue-600' />,
    Completed: <FaCheckCircle className='text-green-600' />,
    Delivered: <FaCheckCircle className='text-red-600' />,
  };

  return (
    <div className='min-h-screen p-6 bg-gray-100'>
      <h1 className='text-3xl font-bold mb-6 text-center text-red-800'>
        My Orders
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='bg-white p-4 rounded-lg shadow-md border border-red-300'>
          <h2 className='text-xl font-semibold mb-4 text-red-600'>
            Order List
          </h2>
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
                      <td className='py-2 px-4 font-semibold'>
                        {order.orderNumber}
                      </td>
                      <td className='py-2 px-4 font-semibold'>
                        <span className={statusColors[order.status]}>
                          {statusIcons[order.status]} {order.status}
                        </span>
                      </td>
                      <td className='py-2 px-4 font-semibold flex '>
                        <button
                          className='text-red-500 hover:underline flex items-center'
                          onClick={() => handleSelectOrder(order)}>
                          <FaEye className='mr-1' /> View
                        </button>
                        {order.status === "Pending" && (
                          <button
                            className='text-red-600 hover:underline  pl-4 flex items-center'
                            onClick={() => handleCancelOrder(order._id)}>
                            <FaTrashAlt className='mr-1' /> Cancel
                          </button>
                        )}
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
            <div className='space-y-4'>
              <div className='border rounded-lg p-4 shadow-sm bg-gray-50'>
                <h3 className='font-bold text-lg'>
                  Order ID: {selectedOrder.orderNumber}
                </h3>
                <div className='flex items-center mt-2'>
                  <strong className='text-red-600 '>Status:</strong>
                  <span
                    className={`pl-4  font-semibold ${
                      statusColors[selectedOrder.status]
                    }`}>
                    {statusIcons[selectedOrder.status]} {selectedOrder.status}
                  </span>
                </div>
                <div className= "mt-2 font-bold pl-1 text-red-600 ">
                  Name: <span className='font-semibold pl-2'>{selectedOrder.customer.name}</span>{" "}
                </div>
              </div>

              <div>
                <strong className='text-red-600'>Items:</strong>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-2'>
                  {selectedOrder.items.map((item) => (
                    <div
                      key={item._id}
                      className='bg-white p-4 rounded-lg shadow-md border border-red-200'>
                      <div className='flex justify-between'>
                        <span className='font-semibold'>
                          {item.quantity} x {item.item.title}
                        </span>
                        <span className='text-red-500 font-semibold'>
                          Rs {item.total}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
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
