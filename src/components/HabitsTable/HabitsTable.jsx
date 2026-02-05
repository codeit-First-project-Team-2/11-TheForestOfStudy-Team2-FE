import styles from './HabitsTable.module.css';
import { PawIcon } from '@/components/pawIcon.jsx';
import { HABIT_THEME_COLORS, INACTIVE_COLOR } from '@/constants/color.js';
import useStudyStore from '@/stores/useStudyStore.js';
import { DAYS, WEEK_DATES } from '@/constants/date.js';

export const HabitsTable = () => {
  const studyData = useStudyStore((state) => state.studyData);
  const habits = studyData?.habits || [];

  if (!studyData) {
    return <div>데이터를 불러오는중입니다 ..</div>;
  }

  // //study가 undefined인 경우 보여줄 내용
  // const study = studyData ?? {
  //   habits: [],
  //   nickname: '사용자',
  //   title: '스터디',
  // };

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
              {habits.length > 0 ? (
                habits.map((habit, index) => {
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
                  <td colSpan={DAYS.length + 1} className={styles.noHabitCell}>
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
