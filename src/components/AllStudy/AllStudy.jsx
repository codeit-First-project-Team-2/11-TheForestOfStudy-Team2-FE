import React from 'react';
import styles from '../AllStudy/AllStudy.module.css';
import { TextField } from '../../components/ui/TextField/TextField';
import StudyCard from '../StudyCard/studycard';
export const AllStudy = () => {
  return (
    <section className={styles.AllStudyContainter}>
      <div className={styles.latestStudyInnerContainer}>
        <h3 className={styles.homeTitlewrapper}>스터디 둘러보기</h3>
        <div className={styles.searchSortContainer}>
          <TextField />
          <select className={styles.selectContainer} defaultValue="Newest">
            <option value="Newest">최신 순</option>
            <option value="Oldest">오래된 순</option>
            <option value="MostPoint">많은 포인트 순</option>
            <option value="leastPoint">적은 포인트 순</option>
          </select>
        </div>
        <div className={styles.cardWapper}>
          <StudyCard />
          <StudyCard />
          <StudyCard />
        </div>
      </div>
    </section>
  );
};
