import axios from "axios";

const instance = axios.create({
  baseURL: "http://daynews.metaldoor.mn/api/",
});

instance.defaults.withCredentials = true;

export default instance;
