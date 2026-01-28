// import { Nav } from '../../components/Nav'
import { FocusTimer } from '../../components/focusTimer';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './TodayFocus.module.css';
import pointIcon from '../../assets/focusTimerImages/point_image.svg';

export function TodayFocus() {
  return (
    <div>
      {/* <Nav /> */}
      <main>
        <section className={styles.timerNavContainer}>
          <div className={styles.timerNavWrapper}>
            <h1 className={styles.timerNavTitle}>{/*nickname*/}의 개발공장</h1>
            <div className={styles.timerNavButtons}>
              <Link to="/" className={styles.habbitButton}>
                오늘의 습관 &nbsp;&gt;
              </Link>
              <Link
                to="/"
                className={clsx(styles.habbitButton, styles.homeButton)}
              >
                홈 &nbsp;&gt;
              </Link>
            </div>
          </div>
          <div className={styles.timerNavPointWrapper}>
            <p className={styles.earnedPoint}>현재까지 획득한 포인트</p>
            <div className={styles.earnedPointButton}>
              <img src={pointIcon} alt="totalPoint" />
              {/* totalPoint*/}P 획득
            </div>
          </div>
        </section>
        <FocusTimer />
      </main>
    </div>
  );
}
