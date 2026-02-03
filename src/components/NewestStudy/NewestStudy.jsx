import React from 'react';
import styles from '../NewestStudy/NewestStudy.module.css';
import StudyCard from '../StudyCard/studycard';
export const NewestStudy = () => {
  return (
    <div>
      <section className={styles.latestStudyContainer}>
        <div className={styles.latestStudyInnerContainer}>
          <h3 className={styles.homeTitlewrapper}>최근 조회한 스터디</h3>
          <div className={styles.cardWapper}>
            <StudyCard />
            <StudyCard />
            <StudyCard />
          </div>
        </div>
      </section>
    </div>
  );
};
