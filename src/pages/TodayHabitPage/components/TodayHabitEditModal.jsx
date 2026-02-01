import clsx from 'clsx';
import { TextField } from '@/components/ui/TextField';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import styles from '../TodayHabitPage.module.css';

export const TodayHabitEditModal = ({
  // ✅ 모달 열림 여부 (부모에서 제어)
  isOpen,
  // ✅ 모달에서 편집하는 임시 목록
  draftHabits,
  // ✅ 입력값
  newHabitTitle,
  // ✅ 입력값 세터
  onChangeNewHabitTitle,
  // ✅ 추가/삭제 액션
  onAddDraftHabit,
  onDeleteDraftHabit,
  // ✅ 취소/완료
  onClose,
  onConfirm,
  // ✅ UX 정책: 최대 개수 도달 여부
  isMaxReached,
  // ✅ UX 정책: 빈문자 방지
  isAddDisabled,
}) => {
  // ✅ 파일 최상단에 JSX 조각만 있으면 “선언/문 필요” 에러가 떠서
  //    반드시 컴포넌트 함수로 감싸고 return 해야 함.
  if (!isOpen) {
    return null; // ✅ 조건부 렌더링은 컴포넌트 내부에서 처리해도 OK
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
                  // ✅ 6개 초과 시 Enter로도 추가 불가
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
