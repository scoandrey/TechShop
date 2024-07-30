import axios from "axios";

const $host = axios.create({
  baseURl: process.env.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURl: process.env.REACT_APP_API_URL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorege.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
