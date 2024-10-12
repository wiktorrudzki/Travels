import { api } from "@/api";
import { LoginRequest, RegisterRequest } from "@/types/auth";

export const login = (body: LoginRequest) => api.post("/auth/login", body);

export const register = (body: RegisterRequest) =>
  api.post("/auth/register", body);

export const logout = () => api.delete("/auth/logout");

export const verifySession = () => api.get("/auth/verify-session");
