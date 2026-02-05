const STORAGE_KEY = 'recentStudies';
const MAX_STORAGE_COUNT = 10;

export const getRecentStudies = () => {
  try {
    const store = localStorage.getItem(STORAGE_KEY); //type:string
    return store ? JSON.parse(store) : [];
  } catch (error) {
    console.error('[LocalStorage Error] 파싱 오류', error);
    return []; //앱 깨짐 방지
  }
};

export const addRecentStudies = (study) => {
  //스터디 없거나 스터디 아이디 없으면 실행 x
  if (!study || !study.id) return;

  //조회한 스터디 정보 불러오기
  const currentList = getRecentStudies();

  //중복제거
  const filteredList = currentList.filter((item) => {
    return item.studyId !== study.id;
  });

  //저장 객체 (studyId, viewedAt)
  const newStoredStudy = {
    studyId: study.id,
  };

  //방금 본건 가장 앞으로 + 10개까지만
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

  // 전체 목록(allIds)에 포함된 studyId만 남김
  const syncedList = currentList.filter((item) =>
    allIds.includes(item.studyId),
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(syncedList));
};
