import { useState } from 'react';
import styles from './TodayHabitPage.module.css';

import { Empty } from '../../components/Empty/Empty';
import { Modal } from '../../components/Modal/Modal';
import { HabitEdit } from '../../components/HabitEdit/HabitEdit';
import { TodayHabitList } from '../../components/TodayHabit/TodayHabitList';

export const TodayHabitPage = () => {
  const [habits, setHabits] = useState([
    // { id: '1', title: '미라 클모닝 6시 기상', isDone: false },
    // { id: '2', title: '아침 챙겨 먹기', isDone: false },
    // { id: '3', title: 'React 스터디 책 1챕터 읽기', isDone: true },
  ]);

  const sortedHabits = [...habits].sort((a, b) => 
    Number(a.isDone) - Number(b.isDone));

  const handleToggleHabitDone = (habitId) => {
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== habitId) {
          return habit;
        }

        return { ...habit, isDone: !habit.isDone };
      }),
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   const fetchHabits = async () => {
  //     const result = await getTodayHabits({
  //       studyId: "test-study-id",
  //       date: "2026-01-23",
  //     });

  //     setHabits(result.habits);
  //   };

  //   fetchHabits();
  // }, []);

  const handleOpenEditModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsModalOpen(false);
  };

  const _handleCompleteHabit = (habitId) => {
    console.log('완료 클릭:', habitId);
    setHabits((prev) => prev.filter((habit) => habit.id !== habitId));
  };

  const handleAddHabit = (title) => {
    setHabits((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
        isDone: false,
      },
    ]);
  };

  const hasHabits = habits.length > 0;

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <header className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>오늘의 습관</h2>

          <button
            type="button"
            className={styles.editButton}
            onClick={handleOpenEditModal}
          >
            목록 수정
          </button>
        </header>

        <div className={styles.cardBody}>
          {!hasHabits && (
            <div className={styles.emptyWrap}>
              <Empty message="아직 오늘의 습관이 없어요. 습관을 추가하면 여기에 표시돼요." />
            </div>
          )}

          {hasHabits && (
              <TodayHabitList 
              habits={sortedHabits} 
              onEdit={handleOpenEditModal}
              onToggle={handleToggleHabitDone} />
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        size="lg"
        title=""
        onClose={handleCloseEditModal}
      >
        <HabitEdit
          habits={habits}
          onAddHabit={handleAddHabit}
          onClose={handleCloseEditModal}
        />
      </Modal>
    </div>
  );
};
