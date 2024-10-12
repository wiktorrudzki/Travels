import axios from "axios";
import * as SecureStore from "expo-secure-store";

export const api = axios.create({
  //   baseURL: `${process.env.EXPO_PUBLIC_API_BASE_URL}/api`,
  baseURL: `https://a62c-94-246-157-145.ngrok-free.app/api`,
});

api.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync("Authorization");
    const userId = await SecureStore.getItemAsync("UserId");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.userId = userId;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
