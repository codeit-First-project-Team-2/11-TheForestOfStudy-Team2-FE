import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { showToast } from '@/utils/toast.util.js';
import { studiesMock } from '@/mocks';

const isDev = true; // 배포시 false로 변경

export const useTodayFocus = (studyId) => {
  const location = useLocation();
  const navigate = useNavigate();

  const targetMockData = isDev
    ? studiesMock.find((mock) => {
        return mock.id === studyId;
      }) || studiesMock[0]
    : null;

  const initialData = location.state?.studyData || targetMockData;
  const [studyData, setStudyData] = useState(initialData);

  useEffect(() => {
    if (!studyId) {
      navigate('/', { replace: true });
      return;
    }

    if (!initialData) {
      navigate(`/studies/${studyId}`, { replace: true });
    }
  }, [initialData, navigate, studyId]);

  const handleSettle = (newTotalPoint, earnedPoint) => {
    setStudyData((prev) => ({ ...prev, totalPoint: newTotalPoint }));

    showToast.success(`${earnedPoint}포인트를 획득했습니다!`);
  };

  return { studyData, handleSettle };
};
