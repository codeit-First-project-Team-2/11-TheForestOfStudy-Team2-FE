import styles from './Header.module.css';
import logo from '@/assets/logo/logo.svg';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { Button } from '../Button';

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const showButtonPaths = ['/', '/create'];
  const showButton = showButtonPaths.includes(pathname);
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <a href="/">
          <img src={logo} alt="TodayHabit" className={styles.logo} />
        </a>
        {showButton && (
          <Button onClick={() => navigate('/create')}>스터디 만들기</Button>
        )}
      </div>
    </header>
  );
};
