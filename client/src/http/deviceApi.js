import { $authHost, $host } from "./index";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const getTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $authHost.post("api/brand", brand);
  return data;
};

export const getBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};

export const createDevice = async (device) => {
  const { data } = await $authHost.post("api/device", device);
  return data;
};

export const getDevices = async (
  typeId = null,
  brandId = null,
  page = 1,
  limit = 5
) => {
  const { data } = await $host.get("api/device", {
    params: { typeId, brandId, page, limit },
  });
  return data;
};

export const getOneDevice = async (id) => {
  const { data } = await $host.get("api/device/" + id);
  return data;
};

export const deleteBrand = async (id) => {
  const { data } = await $authHost.delete(`api/brand/${id}`);
  return data;
};

export const deleteType = async (id) => {
  const { data } = await $authHost.delete(`api/type/${id}`);
  return data;
};

export const deleteDevice = async (id) => {
  const { data } = await $authHost.delete(`api/device/${id}`);
  return data;
};
