import { Routes, Route } from 'react-router';
import { RootLayout } from '@/pages/RootLayout/RootLayout.jsx';
import { Navigate } from 'react-router-dom';

import { Home } from '@/pages/Home/home';
// import { UiPreview } from '@/pages/UiPreview';
// import { TodayFocus } from '@/pages/TodayFocus/TodayFocus';
// import { StudyDetail } from '@/pages/StudyDetail/StudyDetail';
// import { TodayHabitPage } from '@/pages/TodayHabitPage/TodayHabitPage';
import CreateStudy from '@/pages/CreateStudy/CreateStudy';

export const AppRouter = () => {
  return (
    <Routes>
      {/* ✅ 전역 레이아웃 + 공통 Header가 필요한 페이지들 */}
      <Route element={<RootLayout />}>
        {/* <Route path="/" element={<Home />} /> */}
        <Route index element={<Navigate to="/create" replace />} />
        <Route path="/create" element={<CreateStudy />} />
        {/* <Route path="/studies/:studyId" element={<StudyDetail />} />
        <Route path="/studies/:studyId/focus" element={<TodayFocus />} />
        <Route path="/studies/:studyId/habits" element={<TodayHabitPage />} /> */}
      </Route>

      {/* UI 테스트용 */}
      {/* <Route path="/preview" element={<UiPreview />} /> */}
    </Routes>
  );
};
