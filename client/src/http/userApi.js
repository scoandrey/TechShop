import { $host } from ".";

export const registration = async (email, password) => {
  const response = await $host.post("api.user/registratin", {
    email,
    password,
    role: "ADMIN",
  });
  return response;
};

export const login = async (email, password) => {
  const response = await $host.post("api.user/registratin", {
    email,
    password,
  });
  return response;
};

export const check = async () => {
  const response = await $host.post("api.auth/registratin", {});
  return response;
};
