import { useState } from 'react';

const MIN_TITLE_LENGTH = 1;
const MAX_HABITS = 6;

export const useTodayHabitEditModal = ({ habits, setHabits }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [draftHabits, setDraftHabits] = useState([]);
  const [newHabitTitle, setNewHabitTitle] = useState('');

  const isMaxReached = draftHabits.length >= MAX_HABITS;

  const openEdit = () => {
    setDraftHabits([...habits]); // ✅ 실제 habits 복사 → draft
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
    if (draftHabits.length >= MAX_HABITS) {
      return;
    }

    const trimmedTitle = newHabitTitle.trim();

    if (trimmedTitle.length < MIN_TITLE_LENGTH) {
      return;
    }

    const newHabit = {
      id: `draft-${Date.now()}`,
      title: trimmedTitle,
      isDone: false,
    };

    setDraftHabits((prevHabits) => {
      return [...prevHabits, newHabit];
    });

    setNewHabitTitle('');
  };

  const deleteDraftHabit = (habitId) => {
    setDraftHabits((prevHabits) => {
      return prevHabits.filter((habit) => habit.id !== habitId);
    });
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

    // actions / setters
    setNewHabitTitle,
    openEdit,
    closeEdit,
    confirmEdit,
    addDraftHabit,
    deleteDraftHabit,
  };
};
