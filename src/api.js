import axios from "axios";

const api = axios.create({
  baseURL: "https://dev.patriotmed.id",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
