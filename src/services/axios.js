import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

async function apiRequest(method, path, data) {
  return await axiosClient({
    method: method,
    url: path,
    data: data,
  })
    .then((res) => res.data)
    .catch((err) => err);
}

export default apiRequest;
