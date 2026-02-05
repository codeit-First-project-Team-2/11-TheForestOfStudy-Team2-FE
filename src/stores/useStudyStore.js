import { create } from 'zustand';

const useStudyStore = create((set) => ({
  studyData: null,
  isAuthenticated: false,
  error: null,

  setStudyData: (data) =>
    set({ studyData: data, isAuthenticated: true, error: null }),

  setEmojiStats: (newStats) =>
    set((state) => {
      if (!state.studyData) return state;

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
