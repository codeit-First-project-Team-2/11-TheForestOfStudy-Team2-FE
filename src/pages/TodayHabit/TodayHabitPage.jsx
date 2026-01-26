import styles from "./TodayHabitPage.module.css";

import { useEffect, useState } from "react";
import { getTodayHabits } from "../../shared/api/todayHabitApi";
import { Empty } from "../../components/Empty/Empty";

export function TodayHabitPage() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    async function fetchHabits() {
      const result = await getTodayHabits({
        studyId: "test-study-id",
        date: "2026-01-23",
      });

      setHabits(result.habits);
    }

    fetchHabits();
  }, []);

  const hasHabits = habits.length > 0;

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>오늘의 습관</h1>

      {!hasHabits && (
        <Empty message="아직 오늘의 습관이 없어요. 습관을 추가하면 여기에 표시돼요." />
      )}

      {hasHabits && (
        <ul className={styles.list}>
          {habits.map((habit) => (
            <li key={habit.id} className={styles.item}>
              {habit.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}