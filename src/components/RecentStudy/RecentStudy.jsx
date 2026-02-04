import { useEffect, useState } from 'react';
import { StudyCard } from '../study/studyCard';
import { getRecentStudies } from '../../utils/localStorage.util';
import styles from '../RecentStudy/RecentStudy.module.css';

export const RecentStudy = ({ RecentStudy, onCardClick }) => {
  const recentStudyIds = getRecentStudies();

  const recentStudyList = recentStudyIds
    .slice(0, 3)
    .map(({ studyId }) => RecentStudy.find((study) => study.id === studyId))
    .filter(Boolean);

  return (
    <section className={styles.latestStudyContainer}>
      <div className={styles.latestStudyInnerContainer}>
        <h3 className={styles.homeTitlewrapper}>최근 조회한 스터디</h3>
        <div className={styles.cardWapper}>
          {recentStudyList.length > 0 ? (
            recentStudyList.map((study) => (
              <StudyCard
                key={`recent-${study.id}`}
                data={study}
                onClick={() => onCardClick(study)}
              />
            ))
          ) : (
            <p className={styles.noResult}>조회한 스터디가 없습니다.</p>
          )}
        </div>
      </div>
    </section>
  );
};
