import axios from 'axios';

//페이지 조회 전 비밀번호 확인 API
export const verifyPasswordApi = async (studyId, inputPassword) => {
  try {
    const response = await axios.post(`/api/studies/${studyId}/password/verify`, {
      password: inputPassword,
    });

    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || '비밀번호 확인 중 오류가 발생했습니다.';
    console.error('비밀번호 확인 오류:', errorMessage);
    throw new Error(errorMessage);
  }
};

//집중 완료 후 포인트 정산 API
export const settlePointsApi = async (studyId, actualMinutes) => {
  try {
    const response = await axios.post(`/api/studies/${studyId}/focus`, {
      actualMinutes: actualMinutes,
    });

    return response.data;
  } catch (error) {
    const errorMessage =
      error.response.data.massage || '포인트 정산 중 오류가 발생했습니다.';
    console.error('포인트 정산 오류:', errorMessage);
    throw new Error(errorMessage);
  }
};
