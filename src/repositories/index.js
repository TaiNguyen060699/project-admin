import api from "@/repositories/api";
import { END_POINTS } from "@/repositories/constants";

export function doLogin() {
  return new Promise((resolve, reject) => {
    api.get(END_POINTS.LOGIN).then((res) => {
      if (res.statusCode !== 200) reject(res.message);
      resolve(res.data.data);
    });
  });
}
