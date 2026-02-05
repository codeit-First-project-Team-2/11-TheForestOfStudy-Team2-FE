import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { PageHeader } from '@/components/ui/PageHeader';
import { PageCard } from '@/components/ui/PageCard';
import { TextField } from '@/components/ui/TextField';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import styles from './TodayHabitPage.module.css';

const MIN_TITLE_LENGTH = 1;
const MAX_HABITS = 6;

const INITIAL_HABITS = [];

// ✅ 파일 내부 전용 컴포넌트: TodayHabitEditModal
const TodayHabitEditModal = ({
  isOpen,
  draftHabits,
  newHabitTitle,
  onChangeNewHabitTitle,
  onAddDraftHabit,
  onDeleteDraftHabit,
  onClose,
  onConfirm,
  isMaxReached,
  isAddDisabled,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal title="습관 목록" isOpen={isOpen} onClose={onClose} size="md">
      <div className={styles.modalBody}>
        <ul className={clsx(styles.habitList)}>
          {draftHabits.map((habit) => (
            <li className={styles.habitItem} key={habit.id}>
              <span className={styles.habitTitle}>{habit.title}</span>

              <button
                className={styles.deleteButton}
                type="button"
                onClick={() => {
                  onDeleteDraftHabit(habit.id);
                }}
                aria-label="삭제"
              >
                🗑️
              </button>
            </li>
          ))}

          {/* ✅ 입력 행 */}
          <li className={styles.habitList}>
            <div className={styles.habitItem}>
              <TextField
                className={styles.habitInput}
                value={newHabitTitle}
                placeholder={
                  isMaxReached
                    ? '최대 6개까지 추가할 수 있어요'
                    : '새 습관 입력'
                }
                onChange={(e) => {
                  onChangeNewHabitTitle(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !isMaxReached) {
                    onAddDraftHabit();
                  }
                }}
                disabled={isMaxReached}
                aria-describedby="habitLimitHelp"
              />

              <span className={styles.rightSlot} aria-hidden="true" />
            </div>

            <div className={styles.habitItem}>
              <Button
                type="button"
                className={styles.inputButton}
                onClick={onAddDraftHabit}
                disabled={isAddDisabled || isMaxReached}
                aria-label="추가"
                aria-describedby="habitLimitHelp"
              >
                +
              </Button>
              <span className={styles.rightSlot} aria-hidden="true" />
            </div>
          </li>
        </ul>

        <div className={styles.modalFooter}>
          <Button
            className={styles.footerButton}
            type="button"
            onClick={onClose}
          >
            취소
          </Button>
          <Button
            className={styles.footerButton}
            type="button"
            onClick={onConfirm}
          >
            수정 완료
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export const TodayHabitPage = () => {
  
  const [habits, setHabits] = useState(INITIAL_HABITS);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [draftHabits, setDraftHabits] = useState([]);
  const [newHabitTitle, setNewHabitTitle] = useState('');

  const isMaxReached = draftHabits.length >= MAX_HABITS;

  const openEdit = () => {
    setDraftHabits([...habits]);
    setNewHabitTitle('');
    setIsEditOpen(true);
  };

  const closeEdit = () => {
    setIsEditOpen(false);
    setNewHabitTitle('');
  };

  const confirmEdit = () => {
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

    setDraftHabits((prev) => [...prev, newHabit]);
    setNewHabitTitle('');
  };

  const deleteDraftHabit = (habitId) => {
    setDraftHabits((prev) => prev.filter((habit) => habit.id !== habitId));
  };

  const isAddDisabled =
    isMaxReached || newHabitTitle.trim().length < MIN_TITLE_LENGTH;

  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();

      setCurrentTime(
        now.toLocaleString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }),
      );
    };

    update();
    const intervalId = window.setInterval(update, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles.test}>
      <PageHeader
        className={styles.pageHeader}
        title="연우의 개발공장"
        currentTime={currentTime}
      />
      <PageCard>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>오늘의 습관</h2>
          <button
            type="button"
            className={styles.editButton}
            onClick={openEdit}
          >
            목록 수정
          </button>
        </div>

        {/* 습관이 0개일때  */}
        <div className={styles.cardContent}>
          {habits.length === 0 ? (
            <div className={styles.emptyState}>
              <p className={styles.emptyTitle}>아직 습관이 없어요</p>
              <p className={styles.emptyDesc}>
                목록 수정을 눌러 습관을 생성해보세요
              </p>
            </div>
          ) : (
            <ul className={styles.todayHabitList}>
              {habits.map((habit) => (
                <li key={habit.id} className={styles.todayHabitItem}>
                  <button
                    type="button"
                    className={clsx(
                      styles.habitButton,
                      habit.isDone && styles.habitButtonCompleted,
                    )}
                    onClick={() => {
                      setHabits((prev) =>
                        prev.map((h) =>
                          h.id === habit.id ? { ...h, isDone: !h.isDone } : h,
                        ),
                      );
                    }}
                  >
                    {habit.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
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
    </div>
  );
};
