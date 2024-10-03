// TODO: switch `ElMessage` to `snackbar`
// encapsulate Axios
import axios from "axios";
// test-only
// import { ElMessage } from "element-plus";
// import Snackbar from "@/components/snackbar/SnackBar.vue";

// create an axios instance to configure basic settings
let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

// trigger request interceptors before sending request
// config.headers -> parse params (like token) for server-side
request.interceptors.request.use((config) => {
  return config;
});

// response interceptors
// success - simplify data; failure - pop up error message
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let message = "";

    let status = error.response.status;
    switch (status) {
      case 401:
        message = "Unauthorized";
        break;
      case 403:
        message = "Forbidden";
        break;
      case 404:
        message = "Not Found";
        break;
      case 500:
        message = "Internal Server Error";
        break;
      default:
        message = "Network Error";
        break;
    }

//     new Snackbar({message});
//     showSnackbar(message);
// ElMessage({
//      type: 'error',
//      message
// });
    return Promise.reject(error);
  },
);

export default request;
