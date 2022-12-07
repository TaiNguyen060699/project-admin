import axios from "axios";

const BASE_URL = "http://dev.okxe.vn:9060/api";

export const AXIOS = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
