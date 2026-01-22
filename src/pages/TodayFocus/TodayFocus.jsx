// import Nav from '../../components/Nav'
import styles from './TodayFocus.module.css';
import pointIcon from '../../assets/point_image.svg';

export function TodayFocus() {
  return (
    <div>
      {/* <Nav /> */}
      <main>
        <section className={styles.timerNavContainer}>
          <div className={styles.timerNavWrapper}>
            <h1 className={styles.timerNavTitle}>{/*nickname*/}의 개발공장</h1>
            <div>
              <button>오늘의 습관 &gt;</button>
              <button>홈 &gt;</button>
            </div>
          </div>
          <div className={styles.timerNavPointWrapper}>
            <p>현재까지 획득한 포인트</p>
            <div>
              <img src={pointIcon} />
              {/* totalPoint*/} P 획득
            </div>
          </div>
        </section>
        <section className={styles.timerContainer}>
          <h2 className={styles.timerTitle}>오늘의 집중</h2>
          <div className={styles.timerWrapper}>
            <p className={styles.timerContent}>25:00</p>
            <button>start!</button>
          </div>
        </section>
      </main>
    </div>
  );
}
