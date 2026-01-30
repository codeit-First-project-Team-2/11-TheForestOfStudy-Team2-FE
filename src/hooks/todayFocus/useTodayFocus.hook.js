import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
// import { showToast } from '../../utils/toast.util.js';

export const useTodayFocus = (studyId) => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialData = location.state?.studyData;
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

    console.log(`사용자: ${earnedPoint}포인트 획득!`);
    // showToast.success(`${earnedPoint}포인트를 획득했습니다!`);
  };

  return { studyData, handleSettle };
};
