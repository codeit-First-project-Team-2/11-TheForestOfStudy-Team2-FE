import styles from './Header.module.css';
import logo from '@/assets/logo/logo.svg';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <a href="/" className={styles.logoLink}>
          <img
            src={logo}
            alt="TodayHabit"
            className={styles.logo}
          />
        </a>
      </div>
    </header>
  );
};