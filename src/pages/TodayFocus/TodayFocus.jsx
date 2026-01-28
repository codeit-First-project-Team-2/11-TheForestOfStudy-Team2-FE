// import { Nav } from '../../components/Nav'
import { FocusTimer } from '../../components/focusTimer';
import { Link } from 'react-router';
import clsx from 'clsx';
import styles from './TodayFocus.module.css';
import pointIcon from '../../assets/focusTimerImages/point_image.svg';

// 잠시 오류때문에 추가한 코드입니다.
const study = "study";
const studyId= "studyId"


export function TodayFocus() {
  return (
    <div>
      {/* <Nav /> */}
      <main>
        <section className={styles.timerNavContainer}>
          <div className={styles.timerNavWrapper}>
            <h1 className={styles.timerNavTitle}>{study.nickname}</h1>
            <div className={styles.timerNavButtons}>
              <Link
                to={`/studies/${studyId}/habits`}
                className={styles.habbitButton}
              >
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
              {study.totalPoint}P 획득
            </div>
          </div>
        </section>
        <FocusTimer />
      </main>
    </div>
  );
}
