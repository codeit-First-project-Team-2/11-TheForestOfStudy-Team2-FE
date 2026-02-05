import { Outlet, useLocation, useNavigate } from 'react-router';
import { Header } from '@/components/ui/Header/Header';
import styles from './RootLayout.module.css';

export const RootLayout = () => {
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
