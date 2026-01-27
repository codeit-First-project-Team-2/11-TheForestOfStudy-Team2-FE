import React from 'react';
import { Routes, Route } from 'react-router';

export const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/write" element={<StudyForm />} />
      <Route path="/studies/:studyId" element={<StudyDetail />} />
      <Route path="/studies/:studyId/habits" element={<TodayHabits />} />
      <Route path="/studies/:studyId/focus" element={<TodayFocus />} />
    </Routes>
  );
};
