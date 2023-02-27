import axios from "axios";

const instance = axios.create({
  baseURL: "http://daynews.metaldoor.mn/api/v1/",
});

instance.defaults.withCredentials = true;

export default instance;
