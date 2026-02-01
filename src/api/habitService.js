/**
 * 📌 파일 작성 규칙
 * - 담당하신 API 파트에 본인 이름을 작성하고 로직을 완성해주세요.
 * - client(axios 인스턴스)를 사용하여 요청을 보냅니다.
 * - 에러메시지는 constants에 상수로 사용합니다.
 * - 기능에 따라 추가해야할 에러메시지 상수도 constants에서 작성해주세요.
 * - 각 함수는 비동기(async/await)로 작성하며, 데이터 반환 형식은 response.data를 기본으로 합니다.
 */
import client from './client';
import { STUDY_ERROR_MESSAGES } from '../constants/error';
// 1. 습관 수정 (PATCH /habits/:habitId)
// 담당: 고은혜
export const updateHabit = async (habitId, patchData) => {
  try {
    const response = await client.patch(`/habits/${habitId}`, patchData);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[updateHabit] - 에러발생: ${error.message}`);
    throw error;
  }
};

// 2. 습관 삭제 (DELETE /habits/:habitId)
// 담당: 고은혜
export const deleteHabit = async (habitId) => {
  try {
    const response = await client.delete(`/habits/${habitId}`);

    console.log(`Habit ${habitId} 삭제 완료`);
    return response.status;
  } catch (error) {
    console.log(`[deleteHabit] - 에러발생: ${error.message}`);
    throw error;
  }
};
