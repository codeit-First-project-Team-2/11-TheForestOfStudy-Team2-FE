import styles from './HabitsTable.module.css';
import { PawIcon } from '../../components/pawIcon.jsx';
import { HABIT_THEME_COLORS, INACTIVE_COLOR } from '../../constants/color.js';
import { useStudyStore } from '../../stores/useStudyStore';

import { DAYS, WEEK_DATES } from '@/constants/date.js';

const TABLE_COLUMN_COUNT = DAYS.length + 1;

export const HabitsTable = () => {
  //todo 1.스타일 적용안하는 className 삭제 2. 컴포넌트 분리 3.발바닥컬러 습관id를기준으로 변경

  const studyData = useStudyStore((state) => state.studyData);

  //study가 undefined인 경우 보여줄 내용
  const study = studyData ?? {
    habits: [],
    nickname: '사용자',
    title: '스터디',
  };

  const isHabitCompleted = (habit, date) =>
    habit.records?.some((record) => record.createdAt?.slice(0, 10) === date);

  return (
    <div>
      <div className={styles.habitsRecordInnerContainer}>
        <h3 className={styles.titleWrapper}>습관 기록표</h3>

        <div className={styles.tableContainer}>
          <table className={styles.habitTable}>
            <thead>
              <tr className={styles.habitTrContainer}>
                <th></th>
                {DAYS.map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {study.habits.length > 0 ? (
                study.habits.map((habit, index) => {
                  const habitThemeColor =
                    HABIT_THEME_COLORS[index % HABIT_THEME_COLORS.length];

                  return (
                    <tr key={habit.id}>
                      <td className={styles.habitNameCell}>{habit.name}</td>

                      {WEEK_DATES.map((date) => {
                        const completed = isHabitCompleted(habit, date);

                        return (
                          <td key={date} className={styles.habitStatusCell}>
                            <PawIcon
                              color={
                                completed ? habitThemeColor : INACTIVE_COLOR
                              }
                            />
                          </td>
                        );
                      })}
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={TABLE_COLUMN_COUNT}
                    className={styles.noHabitCell}
                  >
                    등록된 습관이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
