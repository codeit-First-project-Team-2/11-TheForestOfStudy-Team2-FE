import client from './client';

export const verifyStudyPassword = (studyId, password) => {
  return client.post(`/studies/${studyId}/password/verify`, { password });
};

export const getStudyDetail = (studyId) => {
  return client.get(`/studies/${studyId}`);
};

export const getStudyHabits = async (studyId) => {
  await client.get(`/studies/${studyId}/habits`);
};

export const getTodayHabitStatus = async (studyId) => {
  await client.get(`/studies/${studyId}/habits/today`);
};

export const getEmojiStats = (studyId) => {
  return client.get(`/studies/${studyId}/emojis`);
};

export const createStudy = async ({
  nickname,
  title,
  introduction,
  background,
  password,
}) => {
  try {
    const data = await client.post('/studies', {
      nickname,
      title,
      introduction,
      background,
      password,
    });

    console.log(data);
    return data;
  } catch (error) {
    console.log(`[createStudy] - 에러발생: ${error.message}`);
    throw error;
  }
};

export const createHabit = async (studyId, habitData) => {
  await client.post(`/studies/${studyId}/habits`, habitData);
};

export const createEmoji = (studyId, type) => {
  return client.post(`/studies/${studyId}/emojis`, { type });
};

export const recordFocusTime = async (studyId, focusData) => {
  await client.post(`/studies/${studyId}/focus`, focusData);
};

export const updateStudy = (studyId, updateData) => {
  return client.patch(`/studies/${studyId}`, updateData);
};

export const deleteStudy = (studyId, password) => {
  return client.delete(`/studies/${studyId}`, { data: { password } });
};
