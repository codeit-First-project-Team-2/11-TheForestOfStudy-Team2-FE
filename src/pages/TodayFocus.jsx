// import { Header } from '../components/ui/Header/Header'
import { useParams, Link } from 'react-router';
import { FocusTimer } from '../components/focusTimer';
import clsx from 'clsx';
import styles from './TodayFocus.module.css';
import pointIcon from '../assets/focusTimerImages/point_image.svg';
import { useTodayFocus } from '../hooks/todayFocus/useTodayFocus.hook';

export function TodayFocus() {
  const { studyId } = useParams();
  const { studyData, handleSettle } = useTodayFocus(studyId);

  // // 임시데이터!!
  // const studyId = 123;
  // const studyData = {
  //   nickname: '열공하는 코린이',
  //   title: '스터디!',
  //   totalPoint: 1995,
  // };
  // const handleSettle = () => console.log('정산 요청 됨!');

  //서버 응답 전 로딩화면
  if (!studyData)
    return (
      <div>
        <p>...잠시만 기다려 주세요.</p>
      </div>
    );

  return (
    <div>
      {/* <Header /> */}
      <main>
        <section className={styles.timerNavContainer}>
          <div className={styles.timerNavWrapper}>
            <h1 className={styles.timerNavTitle}>
              {studyData.nickname}의 {studyData.title}
            </h1>
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
        <FocusTimer studyId={studyId} onSettle={handleSettle} />
      </main>
    </div>
  );
}
