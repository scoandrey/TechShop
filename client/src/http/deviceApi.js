import { $authHost, $host } from "./index";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const getTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const createBrand = async () => {
  const { data } = await $authHost.post("api/brand");
  return data;
};

export const getBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};

export const createDevice = async (typeId, brandId, page, limit = 5) => {
  const { data } = await $authHost.post("api/device", {
    params: { typeId, brandId, page, limit },
  });
  return data;
};

export const getDevices = async () => {
  const { data } = await $host.get("api/device");
  return data;
};

export const getOneDevice = async (id) => {
  const { data } = await $host.get("api/device/" + id);
  return data;
};
