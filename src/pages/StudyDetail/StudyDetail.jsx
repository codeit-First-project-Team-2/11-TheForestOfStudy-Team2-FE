import React, { useState } from 'react';
import styles from './StudyDetail.module.css';
import { studiesMock } from '../../mocks/index.js';
import { HabitsTable } from '../../components/HabitsTable/HabitsTable.jsx';
import { EmojiAddition } from '../../components/EmojiAddition/EmojiAddition.jsx';
import pointImg from '../../assets/studyDetail/Group.jpg';
import { useNavigate, useParams } from 'react-router';
import {
  getStudyDetail,
  verifyStudyPassword,
} from '../../apis/studyService.js';
import { Modal } from '../../components/ui/Modal/Modal.jsx';
import useStudyStore from '../../stores/useStudyStore.js';
//todo 1.스타일 적용안하는 className 삭제 2. 컴포넌트 분리 3.발바닥컬러 습관id를기준으로 변경
export const StudyDetail = () => {
  const { studyId } = useParams();
  const nav = useNavigate();

  const { setStudyData, setError } = useStudyStore();

  //모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetPath, setTargetPath] = useState(''); //비번 인증 성공 시 해당 path 저장
  const [password, setPassword] = useState('');

  const handleProtectedAction = (type) => {
    const pathMap = {
      edit: `/studies/${studyId}/write`,
      delete: 'delete', // 삭제는 이동이 아니라 함수 실행일 수 있으니 키워드만
      habit: `/studies/${studyId}/habits`,
      focus: `/studies/${studyId}/focus`,
    };
    setTargetPath(pathMap[type]);
    setIsModalOpen(true);
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
        //delete 로직 작성
      } else {
        nav(targetPath);
      }
      handleCloseModal();
    } catch (error) {
      setError(error.message);
      alert(error.message || '비밀번호가 틀렸습니다.');
    }
  };
  //study가 undefined인 경우 보여줄 내용
  const study = studiesMock[0] || {
    habits: [],
    nickname: '사용자',
    title: '스터디',
  };

  return (
    <main className={styles.layout}>
      <div className={styles.studyDetailContainer}>
        <section className={styles.headContainer}>
          <EmojiAddition />
          <nav className={styles.navContainer}>
            <div className={styles.green}>
              <p className={styles.linkWrapperShared}>공유하기</p>|
              <p
                onClick={() => handleProtectedAction('edit')}
                className={styles.linkWrapperUpdate}
              >
                수정하기
              </p>
            </div>
            |
            <p
              onClick={() => handleProtectedAction('delete')}
              className={styles.linkWrapperDelete}
            >
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
                <Modal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  title="비밀번호 확인"
                  size="sm"
                >
                  <div className={styles.modalContent}>
                    <p>권한이 필요합니다. 비밀번호를 입력해주세요.</p>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="비밀번호 입력"
                      className={styles.passwordInput} // CSS는 예진님이 살짝 손봐주세요!
                    />
                    <button
                      onClick={handleConfirmPassword}
                      className={styles.confirmBtn}
                    >
                      확인
                    </button>
                  </div>
                </Modal>
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
    </main>
  );
};
