import React, { useEffect, useState } from 'react';
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

  const { studyData, setStudyData, setError, clearStudy } = useStudyStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [targetPath, setTargetPath] = useState('');
  const [password, setPassword] = useState('');
  const [isDeleteConfirm, setIsDeleteConfirm] = useState(false);

  const handleProtectedAction = (type) => {
    const pathMap = {
      edit: `/studies/${studyId}/write`,
      delete: 'delete',
      habit: `/studies/${studyId}/habits`,
      focus: `/studies/${studyId}/focus`,
    };
    setTargetPath(pathMap[type]);
    setIsModalOpen(true);
    if (type === 'delete') {
      setIsDeleteConfirm(true);
    } else {
      setIsDeleteConfirm(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPassword('');
    setError(null);
  };
  const handleConfirmPassword = async () => {
    try {
      const data = await verifyStudyPassword(studyId, password);
      setStudyData(data);
      if (targetPath === 'delete') {
        deleteStudy(studyId, password);
        showToast.success(TOAST.SUCCESS_DELETE);

        clearStudy();
        nav('/');
      } else {
        nav(targetPath);
      }
      handleCloseModal();
    } catch (error) {
      setError(error.message);
      showToast.error(error.response?.data?.message || TOAST.PASSWORD_INVALID);
    }
  };

  const study = studyData || {
    habits: [],
    nickname: '사용자',
    title: '스터디',
    introdcution: '',
    totalPoint: 0,
  };
  useEffect(() => {
    const fetchStudyDetail = async () => {
      try {
        if (!studyId) return;
        const studyDetail = await getStudyDetail(studyId);
        setStudyData(studyDetail);
      } catch (error) {
        showToast.error(TOAST.STUDY_ERROR, error);
      }
    };
    fetchStudyDetail();
  }, [studyId, setStudyData]);

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
                  <h2>{study.nickname}</h2>
                  <p>의&nbsp;</p>
                  <h2>{study.title}</h2>
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
                  <Modal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    title={study.title}
                    size="sm"
                  >
                    {isDeleteConfirm ? (
                      <div className={styles.alertContainer}>
                        <div>⚠️스터디를 삭제하면 복구할 수 없습니다.</div>
                      </div>
                    ) : (
                      ''
                    )}
                    <div className={styles.modalContainer}>
                      <div>
                        <p className={styles.modalLabelWrapper}>
                          권한이 필요해요!
                        </p>
                      </div>
                      <div className={styles.modalTextContainer}>
                        <TextField
                          type={isShowPassword ? 'password' : 'text'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="비밀번호 입력"
                          fullWidth
                        />
                        <button
                          onClick={() => setIsShowPassword(!isShowPassword)}
                          className={styles.visibleButton}
                        >
                          <img src={isShowPassword ? Visible : NoVisible} />
                        </button>
                      </div>

                      <Button onClick={handleConfirmPassword}>확인</Button>
                    </div>
                  </Modal>
                </div>
              </div>
              <div className={styles.introPointContainer}>
                <div>
                  <p className={styles.labelWrapper}>소개</p>
                  <p className={styles.studyIntroduction}>
                    {study.introduction}
                  </p>
                </div>
                <div>
                  <p className={styles.labelWrapper}>현재까지 획득한 포인트</p>
                  <div className={styles.pointWrapper}>
                    <img src={pointImg} />
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
      </div>
    </main>
  );
};
