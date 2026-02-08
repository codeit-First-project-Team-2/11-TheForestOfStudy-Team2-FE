import { Routes, Route } from 'react-router';
import { RootLayout } from '@/pages/RootLayout/RootLayout.jsx';

import { Home } from '@/pages/Home/home';
import { CreateStudy } from '@/pages/CreateStudy/CreateStudy';
import { StudyDetail } from '@/pages/StudyDetail/StudyDetail';
import { TodayHabitPage } from '@/pages/TodayHabitPage/TodayHabitPage';
import { TodayFocus } from '@/pages/TodayFocus/TodayFocus';
import { UiPreview } from '@/pages/UiPreview';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateStudy />} />
        <Route path="/studies/:studyId" element={<StudyDetail />} />
        <Route path="/studies/:studyId/write" element={<CreateStudy />} />
        <Route path="/studies/:studyId/habits" element={<TodayHabitPage />} />
        <Route path="/studies/:studyId/focus" element={<TodayFocus />} />
      </Route>

      <Route path="/preview" element={<UiPreview />} />
    </Routes>
  );
};
