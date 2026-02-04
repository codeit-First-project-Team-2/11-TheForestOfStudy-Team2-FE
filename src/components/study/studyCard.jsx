import { getStudyDayCount } from '@/utils/DayCount.util.js';
import pointIcon from '@/assets/focusTimerImages/point_image.svg';
import styles from './studyCard.module.css';
import { useTruncatedText } from '../../hooks/home/useTruncatedText';
import { EMOJI_LIMITS } from '../../constants/validation.js';

export function StudyCard({ data }) {
  const {
    nickname,
    title,
    totalPoint,
    introduction,
    background,
    createdAt,
    emojis,
    _count,
  } = data || {
    nickname: '아이유',
    title: '테스트 스터디',
    totalPoint: 200,
    introduction: '테스트용 설명입니다.',
    background: '/images/backgrounds/mikey.png',
    createdAt: '2026-01-10T08:30:00.000Z',
    emojis: [
      { type: '🔥', count: 21 },
      { type: '🌱', count: 5 },
    ],
  }; //테스트
  const truncatedIntro = useTruncatedText(introduction);

  const imageSrc = typeof background === 'string' ? background : background;
  //단색인 경우 닉네임 색 변경
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

  const totalEmojiCount = _count?.emojis || 0;
  const visibleEmojis = emojis.slice(
    0,
    EMOJI_LIMITS.VISIBLE.MAX_VISIBLE_EMOJIS,
  );
  return (
    <>
      <div className={`${styles.cardContainer} ${themeColorClass}`}>
        <img
          src={imageSrc}
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

        <h1 className={styles.cardIntroduction}>{truncatedIntro}</h1>
        <div className={styles.emojiWrapper}>
          {emojis &&
            visibleEmojis.map((emoji, index) => (
              <div key={index} className={styles.eachEmoji}>
                <span>{emoji.type}</span>
                <span>{totalEmojiCount}</span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
