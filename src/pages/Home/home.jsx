import styles from '../Home/Home.module.css';
import StudyCard from '../../components/StudyCard/studycard';
import { studiesMock } from '../../mocks';
import { useState } from 'react';

export const Home = () => {
  return (
    <main className={styles.home}>
      <section className={styles.header}>
        <h2 className={styles.title}>스터디 목록</h2>

        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
            placeholder="스터디 제목 검색"
          />
          <button className={styles.searchButton}>검색</button>
        </div>
      </section>

      <section className={styles.studySection}></section>

      <div className={styles.loadMore}>
        <button className={styles.loadMoreButton}>더보기</button>
      </div>
    </main>
  );
};
