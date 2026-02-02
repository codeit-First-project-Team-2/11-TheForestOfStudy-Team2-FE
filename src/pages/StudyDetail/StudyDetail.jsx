import React from 'react';
import styles from './StudyDetail.module.css';
import { studiesMock } from '../../mocks/index.js';
import { HabitsTable } from '../../components/HabitsTable/HabitsTable.jsx';
import { EmojiAddition } from '../../components/EmojiAddition/EmojiAddition.jsx';
import pointImg from '../../assets/studyDetail/Group.jpg';

//todo 1.스타일 적용안하는 className 삭제 2. 컴포넌트 분리 3.발바닥컬러 습관id를기준으로 변경
export const StudyDetail = () => {
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
              <p className={styles.linkWrapperUpdate}>수정하기</p>
            </div>
            |<p className={styles.linkWrapperDelete}>스터디 삭제하기</p>
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
                <button className={styles.todayButtonWrapper}>
                  오늘의 습관&nbsp;&nbsp;&nbsp;&gt;
                </button>
                <button className={styles.todayButtonWrapper}>
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
