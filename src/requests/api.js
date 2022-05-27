import axios from "axios";
import { useState } from "react";

const axiosConfig = axios.create({
  baseURL: "https://nft.urbandesignsco.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const usePostRequest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState();

  const postRequest = (url, cb, toast) => {
    setLoading(true);

    axiosConfig({
      url: url,
      method: "POST",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
        cb();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setErrMsg("Something went wrong, Try again");
        toast();
      });
  };

  return {
    data,
    postRequest,
    loading,
    errMsg,
  };
};

export const useGetRequest = () => {
  const [data, setData] = useState(null);
  const getRequest = (url) => {
    axiosConfig({
      url: url,
      method: "GET",
    })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { getRequest, data };
};
