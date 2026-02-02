import { useState } from 'react';
import styles from '../styles/Home.module.css';
import StudyCard from '../components/StudyCard/StudyCard';

const MOCK_STUDIES = [
  {
    id: 1,
    title: '리액트 스터디',
    nickname: '동철',
    introduction: '리액트 기초부터 같이 공부해요',
    emoji: '🔥',
    backgroundImage: '/',
    totalPoint: 120,
    daysAfterCreated: 3,
  },
  {
    id: 2,
    title: '알고리즘 스터디',
    nickname: '코딩왕',
    introduction: '하루 한 문제!',
    emoji: '🧠',
    backgroundImage: '/',
    totalPoint: 80,
    daysAfterCreated: 7,
  },
  {
    id: 3,
    title: '노드JS 스터디',
    nickname: '서버짱',
    introduction: '백엔드 기초부터 실습까지',
    emoji: '💻',
    backgroundImage: '/',
    totalPoint: 95,
    daysAfterCreated: 2,
  },
  {
    id: 4,
    title: '프론트엔드 스터디',
    nickname: '화면천재',
    introduction: 'UI/UX 감각 키우기',
    emoji: '🎨',
    backgroundImage: '/',
    totalPoint: 110,
    daysAfterCreated: 5,
  },
  {
    id: 5,
    title: '타입스크립트 스터디',
    nickname: '타입마스터',
    introduction: '타입 안정성 확보하기',
    emoji: '📝',
    backgroundImage: '/',
    totalPoint: 70,
    daysAfterCreated: 6,
  },
  {
    id: 6,
    title: '자료구조 스터디',
    nickname: '메모리왕',
    introduction: '자료구조 완전 정복!',
    emoji: '📚',
    backgroundImage: '/',
    totalPoint: 130,
    daysAfterCreated: 1,
  },
];

export default function Home() {
  const [studies] = useState(MOCK_STUDIES);
  const isEmpty = studies.length === 0;

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

      <section className={styles.studySection}>
        {isEmpty ? (
          <p className={styles.emptyText}>
            아직 생성된 스터디가 없습니다.
          </p>
        ) : (
          <ul className={styles.studyList}>
            {studies.map((study) => (
              <li key={study.id} className={styles.studyItem}>
                <StudyCard study={study} />
              </li>
            ))}
          </ul>
        )}
      </section>

      <div className={styles.loadMore}>
        <button className={styles.loadMoreButton}>더보기</button>
      </div>
    </main>
  );
}