import client from './client';

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
