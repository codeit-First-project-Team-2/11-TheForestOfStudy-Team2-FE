import { Outlet } from 'react-router';
import { Header } from '@/components/ui/Header/Header';

export const RootLayout = () => {
  return (
    <div className="pageBackground">
      <div className="pageLayout">
        <Header />
        <main className="pageContent">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
