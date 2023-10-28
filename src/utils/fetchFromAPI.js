/* eslint-disable no-undef */
import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 6,
  },
  headers: {
    "X-RapidAPI-Key": "9ea6f7415amshd66bac1e7e2aff1p119fbajsn9b6d8fc8e386",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
