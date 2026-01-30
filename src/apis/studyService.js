/**
 * 📌 파일 작성 규칙
 * - 담당하신 API 파트에 본인 이름을 작성하고 로직을 완성해주세요.
 * - client(axios 인스턴스)를 사용하여 요청을 보냅니다.
 * - 각 함수는 비동기(async/await)로 작성하며, 데이터 반환 형식은 response.data를 기본으로 합니다.
 */

import client from './client';

// 1. 스터디 목록 조회 (GET /)
// 담당: 000
export const getStudies = async ({ page = 1, pageSize = 10, orderBy = 'recent', keyword }) => {
  try {
    const params = {
      page,
      pageSize,
      orderBy,
      ...(keyword && { keyword }),
    };
    const response = await client.get('/studies', { params });
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[getStudies] - 에러발생: ${error.message}`);
    throw error;
  }
};

// 2. 스터디 상세 조회 (GET /:studyId)
// 담당: 안예진
export const getStudyDetail = async (studyId) => {
  try {
    const response = await client.get(`/studies/${studyId}`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[getStudyDetail] - 에러발생: ${error.message}`);
    throw error;
  }
};

// 3. 스터디 내 습관 목록 조회 (GET /:studyId/habits)
// 담당: 000
export const getStudyHabits = async (studyId) => {
  try {
    const response = await client.get(`/studies/${studyId}/habits`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[getStudyHabits] - 에러발생: ${error.message}`);
    throw error;
  }
};

// 4. 오늘의 습관 달성 상태 조회 (GET /:studyId/habits/today)
// 담당: 000
export const getTodayHabitStatus = async (studyId) => {
  try {
    const response = await client.get(`/studies/${studyId}/habits/today`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[getTodayHabitStatus] - 에러발생: ${error.message}`);
    throw error;
  }
};

// 5. 스터디 이모지 목록 조회 (GET /:studyId/emojis)
// 담당: 000
export const getStudyEmojis = async (studyId) => {
  try {
    const response = await client.get(`/studies/${studyId}/emojis`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[getStudyEmojis] - 에러발생: ${error.message}`);
    throw error;
  }
};

// 6. 스터디 생성 (POST /)
// 담당: 강에스더
export const createStudy = async ({ nickname, title, introduction, background, password }) => {
  try {
    const response = await client.post('/studies', {
      nickname,
      title,
      introduction,
      background,
      password,
    });
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[createStudy] - 에러발생: ${error.message}`);
    throw error;
  }
};

// 7. 스터디 내 습관 생성 (POST /:studyId/habits)
// 담당: 000
export const createHabit = async (studyId, habitData) => {
  try {
    const response = await client.post(`/studies/${studyId}/habits`, habitData);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[createHabit] - 에러발생: ${error.message}`);
    throw error;
  }
};

// 8. 스터디 이모지 등록 (POST /:studyId/emojis)
// 담당: 000
export const registerEmoji = async (studyId, emojiData) => {
  try {
    const response = await client.post(`/studies/${studyId}/emojis`, emojiData);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[registerEmoji] - 에러발생: ${error.message}`);
    throw error;
  }
};

// 9. 집중 시간 기록 (POST /:studyId/focus)
// 담당: 000
export const recordFocusTime = async (studyId, focusData) => {
  try {
    const response = await client.post(`/studies/${studyId}/focus`, focusData);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[recordFocusTime] - 에러발생: ${error.message}`);
    throw error;
  }
};

// 10. 스터디 비밀번호 확인 (POST /:studyId/password/verify)
// 담당: 안예진
export const verifyStudyPassword = async (studyId, password) => {
  try {
    const response = await client.post(`/studies/${studyId}/password/verify`, { password });
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[verifyStudyPassword] - 에러발생: ${error.message}`);
    throw error;
  }
};

// 11. 스터디 수정 (PATCH /:studyId)
// 담당: 안예진
export const patchStudy = async (studyId, updateData) => {
  try {
    const response = await client.patch(`/studies/${studyId}`, updateData);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(`[patchStudy] - 에러발생: ${error.message}`);
    throw error;
  }
};

// 12. 스터디 삭제 (DELETE /:studyId)
// 담당: 안예진
export const deleteStudy = async (studyId) => {
  try {
    const response = await client.delete(`/studies/${studyId}`);
    return response.status;
  } catch (error) {
    console.log(`[deleteStudy] - 에러발생: ${error.message}`);
    throw error;
  }
};
