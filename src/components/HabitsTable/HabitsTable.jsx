import React from 'react';
import styles from './HabitsTable.module.css';
import { studiesMock } from '../../mocks/index.js';
import { PawIcon } from '../../components/pawIcon.jsx';
import { HABIT_THEME_COLORS, INACTIVE_COLOR } from '../../constants/color.js';

export const HabitsTable = () => {
  //todo 1.스타일 적용안하는 className 삭제 2. 컴포넌트 분리 3.발바닥컬러 습관id를기준으로 변경
  const weekDates = [
    '2026-01-26',
    '2026-01-27',
    '2026-01-28',
    '2026-01-29',
    '2026-01-30',
    '2026-01-31',
    '2026-02-01',
  ];
  //study가 undefined인 경우 보여줄 내용
  const study = studiesMock[0] || {
    habits: [],
    nickname: '사용자',
    title: '스터디',
  };
  return (
    <div>
      <div className={styles.habitsRecordInnerContainer}>
        <h3 className={styles.titleWrapper}>습관 기록표</h3>
        <div className={styles.tableContainer}>
          <table className={styles.habitTable}>
            <thead className={styles.theadContainer}>
              <tr className={styles.habitTrContainer}>
                <th className={styles.habitNameHeader}></th>
                {['월', '화', '수', '목', '금', '토', '일'].map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody className={styles.tbodyContainer}>
              {study.habits && study.habits.length > 0 ? (
                study.habits.map((habit, index) => {
                  const habitThemeColor = //수정필요
                    HABIT_THEME_COLORS[index % HABIT_THEME_COLORS.length];

                  return (
                    <tr key={habit.id}>
                      <td className={styles.habitNameCell}>{habit.name}</td>
                      {weekDates.map((date) => {
                        const isCompleted = habit.records.some(
                          (record) => record.createdAt.includes(date), // 수정필요
                        );

                        const iconColor = isCompleted
                          ? habitThemeColor
                          : INACTIVE_COLOR;

                        return (
                          <td key={date} className={styles.habitStatusCell}>
                            <div className={styles.pawIconWrapper}>
                              <PawIcon color={iconColor} />
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={8} className={styles.noHabitCell}>
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
