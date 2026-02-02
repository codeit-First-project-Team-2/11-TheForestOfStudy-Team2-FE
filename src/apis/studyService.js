/**
 * 📌 파일 작성 규칙
 * - 담당하신 API 파트에 본인 이름을 작성하고 로직을 완성해주세요.
 * - client(axios 인스턴스)를 사용하여 요청을 보냅니다.
 * - 에러메시지는 constants에 상수로 사용합니다.
 * - 기능에 따라 추가해야할 에러메시지 상수도 constants에서 작성해주세요.
 * - 각 함수는 비동기(async/await)로 작성하며, 데이터 반환은 (response.data) client.js에서 다루고 있어요.
 */

import client from './client';

// 1. 스터디 목록 조회 (GET /)
// 담당: 000
export const getStudies = async ({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword,
}) => {
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

//스터디 상세 조회 할 때 비밀번호 인증
// 담당: 안예진
export const verifyStudyPassword = (studyId, password) => {
  return client.post(`/studies/${studyId}/password/verify`, { password });
};

// 2. 스터디 상세 조회 (GET /:studyId)
//담당 : 안예진
export const getStudyDetail = (studyId) => {
  return client.get(`/studies/${studyId}`);
};

// 3. 스터디 내 습관 목록 조회 (GET /:studyId/habits)
// 담당: 안예진
export const getStudyHabits = async (studyId) => {
  await client.get(`/studies/${studyId}/habits`);
};

// 4. 오늘의 습관 달성 상태 조회 (GET /:studyId/habits/today)
// 담당: 000
export const getTodayHabitStatus = async (studyId) => {
  await client.get(`/studies/${studyId}/habits/today`);
};

// 5. 스터디 이모지 목록 조회 (GET /:studyId/emojis)
// 담당: 안예진
export const getEmojiStats = (studyId) => {
  return client.get(`/studies/${studyId}/emojis`);
};

// 6. 스터디 생성 (POST /)
// 담당: 강에스더
export const createStudy = async ({
  nickname,
  title,
  introduction,
  background,
  password,
}) => {
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
  await client.post(`/studies/${studyId}/habits`, habitData);
};

// 8. 스터디 이모지 등록 (POST /:studyId/emojis)
// 담당: 안예진
export const createEmoji = (studyId, type) => {
  return client.post(`/studies/${studyId}/emojis`, { type });
};

// 9. 집중 시간 기록 (POST /:studyId/focus)
// 담당: 000
export const recordFocusTime = async (studyId, focusData) => {
  await client.post(`/studies/${studyId}/focus`, focusData);
};

// 11. 스터디 수정 (PATCH /:studyId)
// 담당: 안예진
export const updateStudy = (studyId, updateData) => {
  return client.patch(`/studies/${studyId}`, updateData);
};

// 12. 스터디 삭제 (DELETE /:studyId)
// 담당: 안예진
export const deleteStudy = (studyId, password) => {
  return client.delete(`/studies/${studyId}`, { data: { password } });
};
