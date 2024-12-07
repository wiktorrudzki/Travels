import { AxiosResponseHeaders } from "axios";

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

export type AuthContextType = {
  isLoggedIn: boolean;
  login: (_: unknown, headers: AxiosResponseHeaders) => void;
  logout: () => void;
};

export type ChangePasswordRequest = {
  oldPassword: string;
  password: string;
  confirmPassword: string;
};
