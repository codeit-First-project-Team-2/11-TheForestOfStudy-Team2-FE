import { useState } from 'react';
import clsx from 'clsx';
import { PageHeader } from '@/components/ui/PageHeader';
import { PageCard } from '@/components/ui/PageCard';
import { TextField } from '@/components/ui/TextField';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import styles from './TodayHabitPage.module.css';

// currentTime
const currentTime = () => {
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

const INITIAL_HABITS = [];

// 빈 문자열 입력 방지용
const MIN_TITLE_LENGTH = 1;
const MAX_HABITS = 6;

export const TodayHabitPage = () => {
  const [isEditOpen, setIsEditOpen] = useState(false); // 모달 open/close
  // 모달 안에서만 쓰는 "임시 습관 목록"
  //   - 모달 열 때 habits를 복사해서 채움
  //   - 취소 시 그냥 버려짐
  const [draftHabits, setDraftHabits] = useState([]);
  const [newHabitTitle, setNewHabitTitle] = useState(''); // 새습관 입력창
  const [habits, setHabits] = useState(INITIAL_HABITS); // 진짜 습관 데이터

  const isMaxReached = draftHabits.length >= MAX_HABITS;
  // draft
  const handleAddDraftHabit = () => {
    if (draftHabits.length >= MAX_HABITS) {
      return; // ✅ 6개 넘으면 아예 안 추가
    }

    if (newHabitTitle.trim().length < MIN_TITLE_LENGTH) {
      return;
    }
    const trimmedTitle = newHabitTitle.trim();
    const newHabit = {
      id: `draft-${Date.now()}`, // 🔹 임시 id
      title: trimmedTitle,
      isDone: false,
    };

    setDraftHabits((prevHabits) => [...prevHabits, newHabit]); // 🔹 draft에만 추가
    setNewHabitTitle(''); // 입력창 비우기
  };

  // draftHabits에서 습관삭제
  const handleDeleteDraftHabit = (habitId) => {
    setDraftHabits((prevHabits) => {
      return prevHabits.filter((habit) => habit.id !== habitId);
    });
  };
  //수정 버튼 클릭
  const handleOpenEdit = () => {
    setDraftHabits([...habits]); //실제 데이터 기준 복사
    setIsEditOpen(true);
  };

  // 수정 완료 버튼
  const handleConfirmEdit = () => {
    setHabits(draftHabits); // 🔹 여기서만 실제 데이터 변경
    setIsEditOpen(false); // 🔹 모달 닫기
  };

  // 모달 닫기
  const handleCloseEdit = () => {
    setIsEditOpen(false);
  };

  console.log('TodayHabitPage mounted');
  return (
    <>
      <PageHeader
        className={styles.pageHeader}
        title="연우의 개발공장"
        currentTime={
          <div className={styles.currentTime}>
            <span className={styles.timeLabel}>현재 시간</span>
            <span className={styles.timeValue}>{currentTime()}</span>
          </div>
        }
      />

      <PageCard>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>오늘의 습관</h2>
          <button
            type="button"
            className={styles.editButton}
            onClick={handleOpenEdit}
          >
            목록 수정
          </button>
        </div>

        {/* (빈 상태/리스트 상태)
        {habits.length === 0 ? (
          <p>아직 습관이 없어요</p>
        ) : (
          <ul>
            {habits.map((habit) => (
              <li key={habit.id}>{habit.title}</li>
            ))}
          </ul>
        )} */}

        {/* Modal */}
        {isEditOpen && (
          <Modal
            title="습관 목록"
            isOpen={isEditOpen}
            onClose={handleCloseEdit}
            size="md"
          >
            <div className={styles.modalBody}>
              <ul className={clsx(styles.habitList)}>
                {draftHabits.map((habit) => (
                  <li className={styles.habitItem} key={habit.id}>
                    {/* 🔹 제목 */}
                    <span className={styles.habitTitle}>{habit.title}</span>

                    {/* 🔹 삭제 버튼 */}
                    <button
                      className={styles.deleteButton}
                      type="button"
                      onClick={() => {
                        handleDeleteDraftHabit(habit.id);
                      }}
                      aria-label="삭제"
                    >
                      🗑️
                    </button>
                  </li>
                ))}

                <li className={styles.habitList}>
                  <div className={styles.habitItem}>
                    {/* 습관 입력 */}
                    <TextField
                      className={styles.habitInput}
                      value={newHabitTitle}
                      placeholder="새 습관 입력"
                      onChange={(e) => {
                        setNewHabitTitle(e.target.value);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !isMaxReached) {
                          handleAddDraftHabit();
                        }
                      }}
                    />
                    <span className={styles.rightSlot} aria-hidden="true" />
                  </div>
                  <div className={styles.habitItem}>
                    <Button
                      type="button"
                      className={styles.inputButton}
                      onClick={handleAddDraftHabit}
                      disabled={
                        isMaxReached ||
                        newHabitTitle.trim().length < MIN_TITLE_LENGTH
                      }
                      aria-label="추가"
                    >
                      +
                    </Button>
                    <span className={styles.rightSlot} aria-hidden="true" />
                  </div>
                </li>
              </ul>
              <div className={styles.modalFooter}>
                {/* 추가 버튼 */}
                <Button
                  className={styles.footerButton}
                  type="button"
                  onClick={handleCloseEdit}
                >
                  취소
                </Button>
                {/* 완료버튼 */}
                <Button
                  className={styles.footerButton}
                  onClick={handleConfirmEdit}
                >
                  수정 완료
                </Button>
              </div>
            </div>
          </Modal>
        )}

        {/* <TextField
          value={title}
          onChange={handleChangeTitle}
          placeholder="습관 이름을 입력하세요"
          fullWidth
          ariaLabel="습관 이름 입력"
        /> */}

        {/* <Button fullWidth onClick={handleClickAdd}>
          추가
        </Button> */}
      </PageCard>
    </>
  );
};
