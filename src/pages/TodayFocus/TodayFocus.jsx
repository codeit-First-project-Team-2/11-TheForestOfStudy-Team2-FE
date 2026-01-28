// import { Nav } from '../../components/Nav'
import { FocusTimer } from '../../components/focusTimer';
import { Link, useParams, useLocation, useNavigate } from 'react-router';
import clsx from 'clsx';
import styles from './TodayFocus.module.css';
import pointIcon from '../../assets/focusTimerImages/point_image.svg';
import { useEffect } from 'react';

export function TodayFocus() {
  const { studyId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const studyData = location.state?.studyData;

  //포인트 정산 시 필요한 수도? 고민..
  //const password = location.state?.password; 

  useEffect(() => {
    if (!studyData) {
      navigate(`/studies/${studyId}`);
    }
  }, [studyData, navigate, studyId]);

  if (!studyData) return null; //가장 처음에 앱 깨짐 방지

  return (
    <div>
      {/* <Nav /> */}
      <main>
        <section className={styles.timerNavContainer}>
          <div className={styles.timerNavWrapper}>
            <h1 className={styles.timerNavTitle}>{studyData.nickname}</h1>
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
              {studyData.totalPoint}P 획득
            </div>
          </div>
        </section>
        <FocusTimer />
      </main>
    </div>
  );
}
