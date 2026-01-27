import { useState, useEffect } from 'react';
import { verifyPasswordApi } from '../../apis/focusTimer.api';

export const useConfirmStudy = (studyId, inputPassword) => {
  const [studyData, setStudyData] = useState({ nickname: '', totalPoint: 0 });
  const [isLoading, setIsLoading] = useState(true);

  const updatedPoints = (newPoints) => {
    setStudyData((prev) => ({ ...prev, totalPoint: newPoints }));
  };

  useEffect(() => {
    const confirmUser = async () => {
      try {
        const data = await verifyPasswordApi(studyId, inputPassword);
        setStudyData({ nickname: data.nickname, totalPoint: data.totalPoint });
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    confirmUser();
  }, [studyId, inputPassword]);

  return { studyData, isLoading, updatedPoints };
};
