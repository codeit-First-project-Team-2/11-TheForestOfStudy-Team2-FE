// import Nav from '../../components/Nav'
import styles from './TodayFocus.module.css';
import pointIcon from '../../assets/focusTimerImages/point_image.svg';
import { FocusTimer } from '../../components/focusTimer';

export function TodayFocus() {
  return (
    <div>
      {/* <Nav /> */}
      <main>
        <section className={styles.timerNavContainer}>
          <div className={styles.timerNavWrapper}>
            <h1 className={styles.timerNavTitle}>{/*nickname*/}의 개발공장</h1>
            <div className={styles.timerNavButtons}>
              <a href="/" className={styles.habbitButton}>
                오늘의 습관 &nbsp;&gt;
              </a>
              <a
                href="/"
                className={`${styles.habbitButton} ${styles.homeButton}`}
              >
                홈 &nbsp;&gt;
              </a>
            </div>
          </div>
          <div className={styles.timerNavPointWrapper}>
            <p className={styles.earnedPoint}>현재까지 획득한 포인트</p>
            <div className={styles.earnedPointButton}>
              <img src={pointIcon} alt="totalPoint"/>
              {/* totalPoint*/}P 획득
            </div>
          </div>
        </section>
        <FocusTimer />
      </main>
    </div>
  );
}
