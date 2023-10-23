import { apiClient } from "./ApiClient";

export const SignUpApi = (user) => {
  return apiClient.post("/auth/signup",user);
};
