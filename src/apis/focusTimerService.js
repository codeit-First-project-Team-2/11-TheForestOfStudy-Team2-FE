import client from './client.js';

export const verifyPasswordApi = async (studyId, inputPassword) => {
  try {
    const response = await client.post(`/studies/${studyId}/password/verify`, {
      password: inputPassword,
    });

    return response;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || '비밀번호 확인 중 오류가 발생했습니다.';
    console.error('비밀번호 확인 오류:', errorMessage);
    throw new Error(errorMessage);
  }
};

export const settlePointsApi = async (studyId, actualMinutes) => {
  try {
    const response = await client.post(`/studies/${studyId}/focus`, {
      actualMinutes,
    });

    return response.data;
  } catch (error) {
    const errorMessage =
      error.response.data.message || '포인트 정산 중 오류가 발생했습니다.';
    console.error('포인트 정산 오류:', errorMessage);
    throw new Error(errorMessage);
  }
};
