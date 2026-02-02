import clsx from 'clsx';
import { TextField } from '@/components/ui/TextField';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import styles from '../TodayHabitPage.module.css';

export const TodayHabitEditModal = ({
  isOpen,
  draftHabits,
  newHabitTitle,
  isMaxReached,
  isAddDisabled,
  onChangeNewHabitTitle,
  onAddDraftHabit,
  onDeleteDraftHabit,
  onClose,
  onConfirm,
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
          <Button className={styles.footerButton} type="button" onClick={onClose}>
            취소
          </Button>

          <Button className={styles.footerButton} type="button" onClick={onConfirm}>
            수정 완료
          </Button>
        </div>
      </div>
    </Modal>
  );
};
