import React from 'react';
import { Routes, Route } from 'react-router';
import { StudyDetail } from '../pages/StudyDetail/StudyDetail';
// 주석처리된 Routes들을 꺼내서 쓰면 됩니다. 
// 페이지 import도 해주세요~!
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/studies/:studyId" element={<StudyDetail />} />
      {/* <Route path="/" element={<Home />} />
      <Route path="/write" element={<StudyForm />} />
      <Route path="/studies/:studyId" element={<StudyDetail />} />
      <Route path="/studies/:studyId/habits" element={<TodayHabits />} />
      <Route path="/studies/:studyId/focus" element={<TodayFocus />} /> */}
    </Routes>
  );
};
