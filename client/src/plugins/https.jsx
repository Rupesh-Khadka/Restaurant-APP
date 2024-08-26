import baseAxios from "./axios";

export const GetRequest = (url = "", config = {}) => {
  return baseAxios.get(url, config);
};

export const PostRequest = (url = "", body, config = {}) => {
  return baseAxios.post(url, body, config);
};

export const PutRequest = (url = "", body, config = {}) => {
  return baseAxios.put(url, body, config);
};

export const DeleteRequest = (url = "", config = {}) => {
  return baseAxios.delete(url, config);
};

