import { useState } from 'react';

const MIN_TITLE_LENGTH = 1;
const MAX_HABITS = 6;

export const useTodayHabitModal = ({ habits, setHabits }) => {
  // ✅ 모달 open/close
  const [isEditOpen, setIsEditOpen] = useState(false);

  // ✅ 모달 내 임시 편집 상태
  const [draftHabits, setDraftHabits] = useState([]);

  // ✅ 새 습관 입력값
  const [newHabitTitle, setNewHabitTitle] = useState('');

  const isMaxReached = draftHabits.length >= MAX_HABITS;

  const openEdit = () => {
    // ✅ 모달 열 때만 실제 habits를 복사해서 draft로 만든다
    setDraftHabits([...habits]);
    setNewHabitTitle('');
    setIsEditOpen(true);
  };

  const closeEdit = () => {
    // ✅ 취소: draft 버리고 닫기
    setIsEditOpen(false);
    setNewHabitTitle('');
  };

  const confirmEdit = () => {
    // ✅ 완료: 여기서만 실제 habits 반영
    setHabits(draftHabits);
    setIsEditOpen(false);
    setNewHabitTitle('');
  };

  const addDraftHabit = () => {
    // ✅ 6개 초과 방지
    if (draftHabits.length >= MAX_HABITS) {
      return;
    }

    const trimmedTitle = newHabitTitle.trim();
    // ✅ 빈 문자열 방지
    if (trimmedTitle.length < MIN_TITLE_LENGTH) {
      return;
    }

    const newHabit = {
      id: `draft-${Date.now()}`,
      title: trimmedTitle,
      isDone: false,
    };

    setDraftHabits((prev) => [...prev, newHabit]);
    setNewHabitTitle('');
  };

  const deleteDraftHabit = (habitId) => {
    setDraftHabits((prev) => prev.filter((habit) => habit.id !== habitId));
  };

  const isAddDisabled =
    isMaxReached || newHabitTitle.trim().length < MIN_TITLE_LENGTH;

  return {
    // state
    isEditOpen,
    draftHabits,
    newHabitTitle,
    isMaxReached,
    isAddDisabled,

    // setters
    setNewHabitTitle,

    // actions
    openEdit,
    closeEdit,
    confirmEdit,
    addDraftHabit,
    deleteDraftHabit,
  };
};
