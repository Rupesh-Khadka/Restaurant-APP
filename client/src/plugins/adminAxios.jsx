import axios from "axios";

const adminbaseAxios = axios.create();

baseAxios.defaults.baseURL = "http://localhost:3002/admin";

// Add a request interceptor
baseAxios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("admintoken");
    if (token) {
      config.headers.Authorization = "bearer " + admintoken;
    }
    return config;
  }, // function(config)
  function (error) {
    return Promise.reject(error);
  } // function(error)
);

baseAxios.interceptors.response.use(
  function (response) {
    if (response.status === 200) {
      console.log("Admin data loaded successfully");
    }

    if (response.status === 201) {
      console.log("Admin data created    successfully");
    }
    return response.data;
  }, // function(response)
  function (error) {
    const errorVal = error?.response?.data?.error;

    if ([401].includes(error?.response?.status)) {
      // logoutUser()
    }
    return Promise.reject(errorVal);
  } // function(error)
); // baseAxios.interceptors.response.use

export default adminbaseAxios;
