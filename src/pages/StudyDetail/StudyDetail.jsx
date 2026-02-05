import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import styles from './StudyDetail.module.css';
import { HabitsTable } from '@/components/HabitsTable/HabitsTable.jsx';
import { EmojiAddition } from '@/components/EmojiAddition/EmojiAddition.jsx';
import pointImg from '@/assets/studyDetail/Group.jpg';
import { useNavigate, useParams } from 'react-router';
import {
  deleteStudy,
  verifyStudyPassword,
  getStudyDetail,
} from '@/apis/studyService.js';
import { Modal } from '@/components/ui/Modal/Modal.jsx';
import useStudyStore from '@/stores/useStudyStore.js';
import { TextField } from '@/components/ui/TextField/TextField.jsx';
import { Button } from '@/components/ui/Button/Button.jsx';
import NoVisible from '@/assets/studyDetail/Novisible.jpg';
import Visible from '@/assets/studyDetail/Visible.jpg';
import { TOAST } from '@/constants/error.js';
import { showToast } from '@/utils/toast.util.js';

export const StudyDetail = () => {
  const { studyId } = useParams();
  const nav = useNavigate();
  const { studyData, setStudyData, clearStudy } = useStudyStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetAction, setTargetAction] = useState(null);

  const study = studyData || {
    nickname: '사용자',
    title: '스터디',
    introduction: '',
    totalPoint: 0,
  };

  useEffect(() => {
    const fetchStudyDetail = async () => {
      try {
        if (!studyId) return;

        if (studyData?.id === studyId) return;

        const detail = await getStudyDetail(studyId);
        setStudyData(detail);
      } catch (error) {
        showToast.error(TOAST.STUDY_ERROR, error);
        nav('/');
      }
    };
    fetchStudyDetail();
  }, [studyId, setStudyData, studyData?.id, nav]);

  const handleProtectedAction = (type) => {
    setTargetAction(type);
    setIsModalOpen(true);
  };

  const handlePasswordConfirm = async (password) => {
    try {
      const data = await verifyStudyPassword(studyId, password);
      setStudyData(data);

      if (targetAction === 'delete') {
        await deleteStudy(studyId, password);
        showToast.success(TOAST.SUCCESS_DELETE);
        clearStudy();
        nav('/');
      } else {
        const pathMap = {
          edit: `/studies/${studyId}/write`,
          habit: `/studies/${studyId}/habits`,
          focus: `/studies/${studyId}/focus`,
        };
        const path = pathMap[targetAction];
        if (!path) return;
      }
      setIsModalOpen(false);
    } catch (err) {
      showToast.error(err.response?.data?.message || TOAST.PASSWORD_INVALID);
    }
  };

  return (
    <main className={styles.layout}>
      <div className={styles.layoutWrapper}>
        <div className={styles.studyDetailContainer}>
          <section className={styles.headContainer}>
            <EmojiAddition />
            <nav className={styles.navContainer}>
              <div className={styles.green}>
                <p>공유하기</p>|
                <p onClick={() => handleProtectedAction('edit')}>수정하기</p>
              </div>
              |
              <p onClick={() => handleProtectedAction('delete')}>
                스터디 삭제하기
              </p>
            </nav>
          </section>

        <div className={styles.gapContainer}>
          <section className={styles.StudyDetailContainer}>
            <div className={styles.StudyDetailHeadContainer}>
              <div className={styles.studyTitleContainer}>
                <h2 className={styles.studyNicknameWrapper}>
                  {study.nickname}
                </h2>
                <p>의&nbsp;</p>
                <h2 className={styles.studyTitleWrapper}>{study.title}</h2>
              </div>
              <div className={styles.todayButtonContainer}>
                <button
                  onClick={() => handleProtectedAction('habit')}
                  className={styles.todayButtonWrapper}
                >
                  오늘의 습관&nbsp;&nbsp;&nbsp;&gt;
                </button>
                <button
                  onClick={() => handleProtectedAction('focus')}
                  className={styles.todayButtonWrapper}
                >
                  오늘의 집중&nbsp;&nbsp;&nbsp;&gt;
                </button>
              </div>
            </div>
            <div className={styles.introPointContainer}>
              <div className={styles.introContainer}>
                <p className={styles.labelWrapper}>소개</p>
                <p className={styles.studyIntroduction}>{study.introduction}</p>
              </div>
              <div className={styles.pointContainer}>
                <p className={styles.labelWrapper}>현재까지 획득한 포인트</p>
                <div className={styles.pointWrapper}>
                  <img src={pointImg} alt="point" />
                  {study.totalPoint}P 획득
                </div>
              </div>
            </div>
          </section>
          <section className={styles.habitsRecordContainer}>
            <HabitsTable />
          </section>
        </div>
      </div>

      <PasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={study.title}
        onConfirm={handlePasswordConfirm}
        isDelete={targetAction === 'delete'}
      />
    </main>
  );
};
