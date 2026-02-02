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
                placeholder="새 습관 입력"
                onChange={(e) => {
                  onChangeNewHabitTitle(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !isMaxReached) {
                    onAddDraftHabit();
                  }
                }}
              />
              <span className={styles.rightSlot} aria-hidden="true" />
            </div>

            <div className={styles.habitItem}>
              <Button
                type="button"
                className={styles.inputButton}
                onClick={onAddDraftHabit}
                disabled={isAddDisabled}
                aria-label="추가"
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
  // ✅ 실제 habits
  const [habits, setHabits] = useState(INITIAL_HABITS);

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
          second: '2-digit',
        }),
      );
    };

    update(); // ✅ 처음에도 바로 표시
    const intervalId = window.setInterval(update, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <>
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
