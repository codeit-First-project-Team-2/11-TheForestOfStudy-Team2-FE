import styles from './Header.module.css';
import logo from '../../assets/logo.svg';

export const Header = () => {
  console.log('HEADER RENDER OK');

  return (
    <header className={styles.header}>
      <img 
        src={logo}
        alt="TodayHabit" 
        className={styles.logo}  
        />
    </header>
  );
};
