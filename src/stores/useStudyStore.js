import React from 'react';
import { create } from 'zustand';

const useStudyStore = create((set) => ({
  studyData: null,
  isAuthenticated: false, //비밀번호 인증 성공여부
  error: null,

  //인증상태 변경 액션
  setStudyData: (data) =>
    set({ studyData: data, isAuthenticated: true, error: null }),

  setEmojiStats: (newStats) =>
    set((state) => {
      if (!state.studyData) return state; //이모지가 null일때 방어코드

      return {
        studyData: {
          ...state.studyData,
          emojiStats: newStats,
        },
      };
    }),

  clearStudy: () =>
    set({ studyData: null, isAuthenticated: false, error: null }),

  setError: (message) => set({ error: message }),
}));
export default useStudyStore;
