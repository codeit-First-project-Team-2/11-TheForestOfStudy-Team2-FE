import { getStudyDayCount } from '../../utils/DayCount.util.js';
import pointIcon from '../../assets/focusTimerImages/point_image.svg';
import styles from './studyCard.module.css';
import greenBg from '../../assets/background/green.jpg'; //테스트

export function StudyCard({ data }) {
  const {
    nickname,
    title,
    totalPoint,
    introduction,
    background,
    createdAt,
    emojis,
  } = data || {
    nickname: '아이유',
    title: '테스트 스터디',
    totalPoint: 200,
    introduction: '테스트용 설명입니다.',
    background: greenBg,
    createdAt: '2026-01-10T08:30:00.000Z',
    emojis: [
      { type: '🔥', count: 21 },
      { type: '🌱', count: 5 },
    ],
  }; //테스트

  const getCardColor = (path) => {
    if (!path) return null;

    if (path.toLowerCase().includes('green')) return 'textGreen';
    if (path.toLowerCase().includes('pink')) return 'textPink';
    if (path.toLowerCase().includes('skyblue')) return 'textSkyblue';
    if (path.toLowerCase().includes('yellow')) return 'textYellow';

    return null;
  };

  const cardColorClass = getCardColor(background);
  const isPastelColor = cardColorClass !== null;
  const themeColorClass = isPastelColor ? styles.lightMode : styles.darkMode;

  return (
    <>
      <div className={`${styles.cardContainer} ${themeColorClass}`}>
        <img
          src={background}
          alt="background"
          className={styles.backgroundCardImage}
        />
        {!isPastelColor && <div className={styles.overlay} />}

        <div className={styles.cardWrapper}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>
              <span className={styles[cardColorClass]}>{nickname}</span>
              <span>의 {title}</span>
            </h2>
            <div className={styles.cardTotalPoint}>
              <img src={pointIcon} alt="totalPoint" />
              {totalPoint}P 획득
            </div>
          </div>
          <p className={styles.cardDayCount}>
            {getStudyDayCount(createdAt)}일째 진행 중
          </p>
        </div>

        <h1 className={styles.cardIntroduction}>{introduction}</h1>
        <div className={styles.emojiWrapper}>
          {emojis &&
            emojis.map((emoji, index) => (
              <div key={index} className={styles.eachEmoji}>
                <span>{emoji.type}</span>
                <span>{emoji.count}</span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
