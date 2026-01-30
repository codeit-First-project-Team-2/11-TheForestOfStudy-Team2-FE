import React, { useState } from 'react';
import styles from './StudyDetail.module.css';
import EmojiPicker from 'emoji-picker-react';
import { studiesMock } from '../../mocks/index.js';
import { PawIcon } from '../../components/pawIcon.jsx';
import { HABIT_THEME_COLORS, INACTIVE_COLOR } from '../../constants/color.js';
import { HabitsTable } from '../../components/HabitsTable/HabitsTable.jsx';

export const StudyDetail = () => {
  const [emojiOpen, setEmojiOpen] = useState(false);
  const handleOpenEmoji = () => setEmojiOpen(!emojiOpen);
  //todo 1.스타일 적용안하는 className 삭제 2. 컴포넌트 분리 3.발바닥컬러 습관id를기준으로 변경

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
          <div className={styles.emojiContainer}>
            <div>이모지버튼들 자리</div>
            <button className={styles.emojiWrapper} onClick={handleOpenEmoji}>
              이모지추가
            </button>
          </div>
          <EmojiPicker open={emojiOpen} />
          <nav className={styles.navContainer}>
            <p className={styles.linkWrapper}>공유하기</p>
            <p className={styles.linkWrapper}>수정하기</p>
            <p className={styles.linkWrapper}>스터디 삭제하기</p>
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
                  오늘의 습관
                </button>
                <button className={styles.todayButtonWrapper}>
                  오늘의 집중
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
                <div>{study.totalPoint} P</div>
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
