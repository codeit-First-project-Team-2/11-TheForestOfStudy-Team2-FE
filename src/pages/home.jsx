import styles from '../pages/Home.module.css';
import StudyCard from '../components/StudyCard/StudyCard';
import { useParams } from 'react-router';

export default function Home() {
  const { studyId } = useParams();
  const isEmpty = studyId.length === 0;

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
          <p className={styles.emptyText}>아직 생성된 스터디가 없습니다.</p>
        ) : (
          <ul className={styles.studyList}>
            {studyId.map(() => (
              <li key={studyId} className={styles.studyItem}>
                <StudyCard/>
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
