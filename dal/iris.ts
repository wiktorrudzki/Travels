import { api } from "@/api";

export const login = () =>
  api.post<string>("/auth/login", {
    email: "admin@itisit.pl",
    password: "Qwerty26^",
  });

export const getDispatchOffices = () =>
  api.get<string[]>("/poczta-polska/dispatch-offices");
