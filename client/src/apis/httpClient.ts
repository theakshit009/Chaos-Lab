import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:4000/api", // backend base URL
  timeout: 10000, // 10s timeout (important for chaos testing)
  headers: {
    "Content-Type": "application/json",
  },
});

/* =========================
   REQUEST INTERCEPTOR
   ========================= */
httpClient.interceptors.request.use(
  (config) => {
    // yahan future me auth token add kar sakte ho
    // const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);

/* =========================
   RESPONSE INTERCEPTOR
   ========================= */
httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // ⚠️ IMPORTANT for chaos scenarios
    if (error.code === "ECONNABORTED") {
      return Promise.reject({
        message: "Request timeout (simulated packet drop)",
        isTimeout: true,
      });
    }

    if (error.response) {
      return Promise.reject({
        status: error.response.status,
        message:
          error.response.data?.message ||
          "Server error occurred",
      });
    }

    return Promise.reject({
      message: "Network error",
    });
  }
);

export default httpClient;
