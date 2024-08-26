import axios from "axios";

const baseAxios = axios.create();

baseAxios.defaults.baseURL = "http://localhost:3002";

// Add a request interceptor
baseAxios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "bearer " + token;
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
      console.log("data loaded successfully");
    }

    if (response.status === 201) {
      console.log("data created    successfully");
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

export default baseAxios;
