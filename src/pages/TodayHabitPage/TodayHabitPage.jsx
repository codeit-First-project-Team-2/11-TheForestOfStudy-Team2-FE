import { useState } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { PageCard } from '@/components/ui/PageCard';
import styles from './TodayHabitPage.module.css';
import { TodayHabitEditModal } from './components/TodayHabitEditModal';
import { useTodayHabitModal } from './hooks/useTodayHabitModal';

const INITIAL_HABITS = [];

export const TodayHabitPage = () => {
  const [habits, setHabits] = useState(INITIAL_HABITS);

  const {
    isEditOpen,
    draftHabits,
    newHabitTitle,
    isMaxReached,
    isAddDisabled,
    setNewHabitTitle,
    openEdit,
    closeEdit,
    confirmEdit,
    addDraftHabit,
    deleteDraftHabit,
  } = useTodayHabitModal({ habits, setHabits });

  return (
    <>
      <PageHeader className={styles.pageHeader} title="연우의 개발공장" />

      <PageCard>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>오늘의 습관</h2>
          <button type="button" className={styles.editButton} onClick={openEdit}>
            목록 수정
          </button>
        </div>

        <TodayHabitEditModal
          isOpen={isEditOpen}
          draftHabits={draftHabits}
          newHabitTitle={newHabitTitle}
          onChangeNewHabitTitle={setNewHabitTitle}
          onAddDraftHabit={addDraftHabit}
          onDeleteDraftHabit={deleteDraftHabit}
          onClose={closeEdit}
          onConfirm={confirmEdit}
          isMaxReached={isMaxReached}
          isAddDisabled={isAddDisabled}
        />
      </PageCard>
    </>
  );
};
