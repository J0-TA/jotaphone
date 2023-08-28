import axios from "axios";
import { getCache, setCache } from "../utils/cacheConfig";

const baseUrl = "https://itx-frontend-test.onrender.com/api";

export const fetchItems = () => {
  const cachedData = getCache("items");
  if (cachedData) {
    return Promise.resolve(cachedData);
  }

  return axios
    .get(`${baseUrl}/product`)
    .then((response) => {
      setCache("items", response.data);
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const fetchItemDetail = (id) => {
  const cachedData = getCache(`item_${id}`);
  if (cachedData) {
    return Promise.resolve(cachedData);
  }

  return axios
    .get(`${baseUrl}/product/${id}`)
    .then((response) => {
      setCache(`item_${id}`, response.data);
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const submitItemtoCart = (itemDetails) => {
  return axios
    .post(`${baseUrl}/cart`, itemDetails)
    .then((response) => {
      return response.data.count;
    })
    .catch((error) => {
      console.error("Error adding item to chart", error);
    });
};
