const STORAGE_KEY = 'recentStudies';
const MAX_STORAGE_COUNT = 10;

export const getRecentStudies = () => {
  try {
    const store = localStorage.getItem(STORAGE_KEY);
    return store ? JSON.parse(store) : [];
  } catch (error) {
    console.error('[LocalStorage Error] 파싱 오류', error);
    return [];
  }
};

export const addRecentStudies = (study) => {
  if (!study || !study.id) return;

  const currentList = getRecentStudies();

  const filteredList = currentList.filter((item) => {
    return item.studyId !== study.id;
  });

  const newStoredStudy = {
    studyId: study.id,
  };

  const updatedList = [newStoredStudy, ...filteredList].slice(
    0,
    MAX_STORAGE_COUNT,
  );

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
  } catch (error) {
    console.error('[LocalStorage Error] 저장 오류', error);
  }
};

export const syncRecentStudies = (allStudies) => {
  const currentList = getRecentStudies();
  const allIds = allStudies.map((s) => s.id);

  const syncedList = currentList.filter((item) =>
    allIds.includes(item.studyId),
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(syncedList));
};
