import { useState } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { PageCard } from '@/components/ui/PageCard';
import styles from './TodayHabitPage.module.css';
import { TodayHabitEditModal } from './components/TodayHabitEditModal';
import { useTodayHabitEditModal } from './hooks/useTodayHabitEditModal';

const INITIAL_HABITS = [];

const getCurrentTimeText = () => {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const period = hours < 12 ? '오전' : '오후';
  const displayHour = hours % 12 === 0 ? 12 : hours % 12;

  return `${yyyy}-${mm}-${dd} ${period} ${displayHour}:${minutes}`;
};

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
  } = useTodayHabitEditModal({ habits, setHabits });

  return (
    <>
    <div className="pageBackground">
      <div className="pageLayout">
        <div className="pageContent">
          <PageHeader
            className={styles.pageHeader}
            title="연우의 개발공장"
            currentTime={
              <div className={styles.currentTime}>
                <span className={styles.timeLabel}>현재 시간</span>
                <span className={styles.timeValue}>{getCurrentTimeText()}</span>
              </div>
            }
          />

          <PageCard>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>오늘의 습관</h2>
              <button
                type="button"
                className={styles.editButton}
                onClick={openEdit}
              >
                목록수정
              </button>
            </div>

            <TodayHabitEditModal
              isOpen={isEditOpen}
              draftHabits={draftHabits}
              newHabitTitle={newHabitTitle}
              isMaxReached={isMaxReached}
              isAddDisabled={isAddDisabled}
              onChangeNewHabitTitle={setNewHabitTitle}
              onAddDraftHabit={addDraftHabit}
              onDeleteDraftHabit={deleteDraftHabit}
              onClose={closeEdit}
              onConfirm={confirmEdit}
            />
          </PageCard>
          </div>
      </div>
      </div>
    </>
  );
};
