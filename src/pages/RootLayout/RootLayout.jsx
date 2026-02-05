import { Outlet, useLocation, useNavigate } from 'react-router';
import { Header } from '@/components/ui/Header/Header';
import styles from './RootLayout.module.css';

export const RootLayout = () => {
  const { pathName } = useLocation();
  const navigate = useNavigate();
  const showButtonPaths = ['/'];
  const showButton = showButtonPaths.includes(pathName);
  return (
    <div>
      <div className={styles.pageLayout}>
        <Header />
        <main className={styles.pageContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
