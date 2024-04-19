import axios from "axios"

const BASE_URI = "http://localhost:3001/api/v1"

const axiosIntance = axios.create()
axiosIntance.defaults.baseURL = BASE_URI
axiosIntance.defaults.withCredentials = true;

export default axiosIntance;