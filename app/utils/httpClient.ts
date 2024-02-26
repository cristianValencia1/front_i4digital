import axios, { AxiosInstance } from "axios";

const baseURL = import.meta?.env?.VITE_API_BASE_URL as string;

const httpClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use(async (config: any) => {
  config.headers.Authorization = `${UserStore.token}`;
  return config;
});

const fetcher = (url: string) =>
  httpClient.get(url).then((res: any) => res.data);

export { httpClient, fetcher };
