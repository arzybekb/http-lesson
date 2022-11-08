import axios from "axios";

const baseURL = "http://ec2-54-93-233-9.eu-central-1.compute.amazonaws.com/api";
const headers = { "Content-Type": "multipart/form-data" };

const formDataInstance = axios.create({ baseURL, headers });

formDataInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default formDataInstance;
