import axios from 'axios';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const errorMessage =
      error.response?.data?.message || '알 수 없는 오류가 발생했습니다.';
    const status = error.response?.status;

    console.error(`[API Error] ${status}: ${errorMessage}`);

    if (status === 401) {
      // 인증 관련 로직 추가 가능
    }

    return Promise.reject({
      status,
      message: errorMessage,
      originalError: error,
    });
  },
);

export default client;
