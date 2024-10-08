import { api } from "@/api";
import { LoginRequest, RegisterRequest } from "@/types/auth";

export const login = (body: LoginRequest) =>
  api.post<string>("/auth/login", body);

export const register = (body: RegisterRequest) => {
  console.log(body);
  return api.post<string>("/auth/register", body);
};
