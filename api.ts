import axios from "axios";

export const api = axios.create({
  //   baseURL: `${process.env.EXPO_PUBLIC_API_BASE_URL}/api`,
  baseURL: `https://8655-94-246-157-145.ngrok-free.app/api`,
});
