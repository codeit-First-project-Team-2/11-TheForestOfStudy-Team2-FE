import styles from '../StudyCard/StudyCard.module.css';

import GREEN from '../../assets/background/green.jpg';

export default function StudyCard() {
  return (
    <article className={styles.card} style={{ backgroundImage: GREEN }}>
      <div className={styles.overlay}>
        <header className={styles.header}>
          <span className={styles.emoji}>이모지</span>
          <h3 className={styles.title}>타이틀</h3>
        </header>

        <p className={styles.introduction}>인트로덕션</p>

        <footer className={styles.footer}>
          <span className={styles.nickname}>닉네임</span>
          <span className={styles.point}>100</span>
          <span className={styles.date}>10일 전</span>
        </footer>
      </div>
    </article>
  );
}
