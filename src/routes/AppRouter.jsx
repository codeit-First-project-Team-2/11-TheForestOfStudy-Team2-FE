import { Routes, Route } from 'react-router';
import { RootLayout } from '@/pages/RootLayout/RootLayout.jsx';

import { Home } from '@/pages/Home/home';
import { UiPreview } from '@/pages/UiPreview';
import { TodayFocus } from '@/pages/TodayFocus.jsx';
import { StudyDetail } from '@/pages/StudyDetail/StudyDetail';
import { TodayHabitPage } from '@/pages/TodayHabitPage/TodayHabitPage';
// import { CreateStudyPage } from '@/pages/CreateStudy.jsx';

// 주석처리된 Routes들을 꺼내서 쓰면 됩니다.
// 페이지 import도 해주세요~!
export const AppRouter = () => {
  return (
    <Routes>
      {/* ✅ 전역 레이아웃 + 공통 Header가 필요한 페이지들 */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/create" element={<CreateStudyPage />} /> */}
        <Route path="/studies/:studyId" element={<StudyDetail />} />
        <Route path="/studies/:studyId/focus" element={<TodayFocus />} />
        <Route path="/studies/:studyId/habits" element={<TodayHabitPage />} />
      </Route>

      {/* UI 테스트용 */}
      <Route path="/priview" element={<UiPreview />} />
    </Routes>
  );
};
