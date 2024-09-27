import adminbaseAxios from "./adminAxios";

export const GetRequest = (url = "", config = {}) => {
  return adminbaseAxios.get(url, config);
};

export const PostRequest = (url = "", body, config = {}) => {
  return adminbaseAxios.post(url, body, config);
};

export const PutRequest = (url = "", body, config = {}) => {
  return adminbaseAxios.put(url, body, config);
};

export const DeleteRequest = (url = "", config = {}) => {
  return adminbaseAxios.delete(url, config);
};

