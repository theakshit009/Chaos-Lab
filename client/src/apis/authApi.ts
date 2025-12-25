import httpClient from "./httpClient";

export const register = async (
  email: string,
  password: string
) => {
  const res = await httpClient.post("/api/auth/register", {
    email,
    password,
  });

  localStorage.setItem("token", res.data.token);
  return res.data;
};

export const login = async (
  email: string,
  password: string
) => {
  const res = await httpClient.post("/api/auth/login", {
    email,
    password,
  });

  localStorage.setItem("token", res.data.token);
  return res.data;
};
