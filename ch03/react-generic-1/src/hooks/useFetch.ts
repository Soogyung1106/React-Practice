import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";

axios.defaults.baseURL = "/api"; //base 경로

const useFetch = <T>(url: string, params: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse<T>>();
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // return { response, error, isLoading };

  const fetchData = async () => {
    setResponse(undefined);
    setError(undefined);

    try {
      setIsLoading(true);
      const result: AxiosResponse<T> = await axios.get<T>(url, params);
      setResponse(result);
    } catch (error) {
      setError(error as unknown as AxiosError);
    } finally {
      setIsLoading(false);
    }
  };

  const requestData = () => {
    fetchData();
  };

  return { response, error, isLoading, requestData };
};

export { useFetch };
