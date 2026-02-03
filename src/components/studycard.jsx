import styles from '../components/StudyCard.module.css';

export default function StudyCard({ study }) {
  const {
    title,
    nickname,
    introduction,
    emoji,
    backgroundImage,
    totalPoint,
    daysAfterCreated,
  } = study;

  return (
    <article
      className={styles.card}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}>
        <header className={styles.header}>
          <span className={styles.emoji}>{emoji}</span>
          <h3 className={styles.title}>{title}</h3>
        </header>

        <p className={styles.introduction}>{introduction}</p>

        <footer className={styles.footer}>
          <span className={styles.nickname}>{nickname}</span>
          <span className={styles.point}>{totalPoint}</span>
          <span className={styles.date}>
            {daysAfterCreated}일 전
          </span>
        </footer>
      </div>
    </article>
  );
}