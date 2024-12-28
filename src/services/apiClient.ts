import axios from "axios";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const apiClient = axios.create({
  baseURL: "https://www.omdbapi.com/",
  params: {
    apiKey: API_KEY,
  },
});

export default apiClient;
