import { AXIOS } from "@/repositories/http";
import * as Cookies from "es-cookie";

let token = Cookies.get("access_token") || "";

AXIOS.interceptors.request.use((config) => {
  if (token) config.headers.Authorization = `Token ${token}`;
  return config;
});

export default {
  get(url, params, config = {}) {
    return AXIOS.get(url, {
      params,
      ...config,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },

  post(url, params, config = {}) {
    return AXIOS({
      method: "post",
      url: url,
      data: params,
      ...config,
    })
      .then((res) => res)
      .catch((err) => {
        return err;
      });
  },

  put(url, params, config = {}) {
    return AXIOS({
      method: "put",
      url: url,
      data: params,
      ...config,
    })
      .then((res) => res)
      .catch((err) => {
        return err;
      });
  },

  delete(url, params) {
    return AXIOS({
      method: "delete",
      url: url,
      data: params,
    })
      .then((res) => res)
      .catch((err) => {
        return err;
      });
  },

  postDefault(url, params) {
    return AXIOS({
      method: "post",
      url: url,
      data: params,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  },
};
