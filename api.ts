import axios from "axios";
import * as SecureStore from "expo-secure-store";

export const api = axios.create({
  //   baseURL: `${process.env.EXPO_PUBLIC_API_BASE_URL}/api`,
  baseURL: `https://e223-37-30-123-64.ngrok-free.app/api`,
});

api.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync("Authorization");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
