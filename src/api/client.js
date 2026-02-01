import axios from 'axios';
console.log('현재 API 주소:', import.meta.env.VITE_API_URL);
const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});

// 응답 인터셉터: 백엔드의 errorHandler 구조에 맞게 설계
client.interceptors.response.use(
  (response) => {
    // 백엔드에서 res.json({ success: true, ... }) 형태로 보내면 바로 응답 return 
    return response.data;
  },
  (error) => {
    // 백엔드 errorHandler에서 보낸 json 데이터에 접근
    const errorMessage = error.response?.data?.message || '알 수 없는 오류가 발생했습니다.';
    const status = error.response?.status;

    // 사용자에게 보여줄 에러 메시지 처리
    console.error(`[API Error] ${status}: ${errorMessage}`);
    
    // 여기서 토스트 메시지를 띄우거나 특정 페이지로 리다이렉트
    if (status === 401) {
      // 인증 관련 로직 추가 가능
    }

    return Promise.reject({
      status,
      message: errorMessage,
      originalError: error
    });
  }
);

export default client;