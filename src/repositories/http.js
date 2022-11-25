import axios from "axios";

const BASE_URL = "https://a7fd17ad-9fb6-4e95-a502-8b6a502a2957.mock.pstmn.io";

export const AXIOS = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
