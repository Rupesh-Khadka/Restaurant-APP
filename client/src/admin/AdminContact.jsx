import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../store/modules/contact/reducer";
import { setContact } from "../store/modules/contact/action";
import NavAdmin from "./NavAdmin";
import { FiTrash2 } from "react-icons/fi";

const AdminContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactReducer.contact);

  useEffect(() => {
    getContact(dispatch);
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      const updatedContacts = contacts.filter((contact) => contact.id !== id);
      dispatch(setContact(updatedContacts));

      console.log("Deleted contact with id:", id);
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div>
      {" "}
      <NavAdmin />
      <div className='min-h-screen bg-white flex flex-col items-center py-10'>
        <div className='w-full max-w-4xl bg-gray-100 p-6 rounded-lg shadow-md'>
          <h1 className='text-2xl font-bold text-center mb-4'>
            Contact Messages
          </h1>
          {contacts.length === 0 ? (
            <p className='text-center text-gray-500'>
              No contact messages available.
            </p>
          ) : (
            <ul className='space-y-4'>
              {contacts.map((contact) => (
                <li
                  key={contact.id}
                  className='bg-white p-4 rounded-lg shadow flex justify-between items-center'>
                  <div>
                    <p className='font-semibold text-lg'>{contact.name}</p>
                    <p className='text-gray-600'>{contact.number}</p>
                    <p className='text-gray-600'>{contact.email}</p>
                    <p className='text-gray-800 mt-2'>{contact.message}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className='text-red-600 hover:text-red-800'
                    aria-label='Delete Contact'>
                    <FiTrash2 size={24} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminContact;
