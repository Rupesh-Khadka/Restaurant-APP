import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavAdmin from "./NavAdmin";
import { getOrder, updateOrderStatus } from "../store/modules/order/reducer";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

const AdminOrder = () => {
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderReducer.order) || [];
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    getOrder(dispatch);
  }, [dispatch]);

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
  };

  const handleStatusChange = async (newStatus) => {
    if (selectedOrder) {
      const updatedOrder = { ...selectedOrder, status: newStatus };
      await updateOrderStatus(dispatch, updatedOrder);
      // Reload the orders to get the latest data
      await getOrder(dispatch);
    }
  };

  const formatOrderId = (index) => {
    return `MR${String(index + 1).padStart(2, "0")}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "text-yellow-500";
      case "In Progress":
        return "text-blue-500";
      case "Completed":
        return "text-green-500";
      default:
        return "text-gray-500";
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
                    <th className='py-2 px-4 text-left text-red-800'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderDetails.length === 0 ? (
                    <tr>
                      <td colSpan='5' className='py-4 text-center text-red-600'>
                        No orders available
                      </td>
                    </tr>
                  ) : (
                    orderDetails.map((order, index) => (
                      <tr key={order._id} className='border-b hover:bg-red-50'>
                        <td className='py-2 px-4 font-semibold'>
                          {formatOrderId(index)}
                        </td>
                        <td className='py-2 px-4 font-semibold'>
                          {order.customer.name}
                        </td>
                        <td className='py-2 px-4 font-semibold'>
                          Rs. {order.totalAmount}
                        </td>
                        <td className='py-2 px-4 font-semibold'>
                          <span className={getStatusColor(order.status)}>
                            {order.status}
                          </span>
                        </td>
                        <td className='py-2 px-4'>
                          <button
                            className='text-red-500 hover:underline'
                            onClick={() => handleViewOrder(order)}>
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
          <div className='bg-white p-6 rounded-lg shadow-lg border border-red-300'>
            <h2 className='text-xl font-semibold mb-4 text-red-600'>
              Order Details
            </h2>
            {selectedOrder ? (
              <div className='space-y-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {selectedOrder.items.map((item) => (
                    <div
                      key={item._id}
                      className='bg-red-50 p-4 rounded-lg shadow-md flex flex-col items-start'>
                      <h4 className='font-bold text-lg'>{item.item.title}</h4>
                      <div className='flex items-center mt-2'>
                        <span className='font-semibold text-blue-600 text-lg'>
                          <span className='pr-2'>Quantity:</span>
                          {item.quantity}
                        </span>
                        <span className='mx-2 font-semibold text-red-500 text-lg'>
                          Total Amt:
                        </span>
                        <span className='text-red-500 font-semibold text-lg'>
                          Rs {item.total}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='border-t pt-4'>
                  <div className='flex items-center border-b pb-2'>
                    <FaUser className='text-red-600 mr-2' />
                    <span className='font-bold'>Customer:</span>
                    <span className='font-semibold pl-4'>
                      {selectedOrder.customer.name}
                    </span>
                  </div>
                  <div className='flex items-center border-b pb-2'>
                    <FaEnvelope className='text-red-600 mr-2' />
                    <span className='font-bold'>Email:</span>
                    <span className='font-semibold pl-4'>
                      {selectedOrder.customer.email}
                    </span>
                  </div>
                  <div className='flex items-center border-b pb-2'>
                    <FaPhone className='text-red-600 mr-2' />
                    <span className='font-bold'>Number:</span>
                    <span className='font-semibold pl-4'>
                      {selectedOrder.customer.number}
                    </span>
                  </div>
                  <div className='flex items-center border-b pb-2'>
                    <FaMapMarkerAlt className='text-red-600 mr-2' />
                    <span className='font-bold'>Address:</span>
                    <span className='font-semibold pl-4'>
                      {selectedOrder.customer.address}
                    </span>
                  </div>
                  <div className='flex items-center border-b pb-2'>
                    <FaMoneyBillWave className='text-red-600 mr-2' />
                    <span className='font-bold'>Total Amount:</span>
                    <span className='font-semibold pl-4'>
                      Rs {selectedOrder.totalAmount}
                    </span>
                  </div>
                  <div className='flex items-center border-b pb-2'>
                    <span className='font-bold'>Status:</span>
                    <span
                      className={`pl-2 font-bold ${getStatusColor(
                        selectedOrder.status
                      )}`}>
                      {selectedOrder.status}
                    </span>
                  </div>
                </div>

                <div className='flex space-x-2 mt-4'>
                  {["Pending", "In Progress", "Completed"].map((status) => (
                    <button
                      key={status}
                      className='bg-red-600 text-white py-1 px-3 rounded hover:bg-red-500'
                      onClick={() =>
                        handleStatusChange(status, selectedOrder._id)
                      }>
                      {status}
                    </button>
                  ))}
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
