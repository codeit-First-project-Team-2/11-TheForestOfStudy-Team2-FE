import styles from './TodayHabitList.module.css';
import { TodayHabitItem } from './TodayHabitItem.jsx';

export const TodayHabitList = ({ habits, onEdit, onToggle }) => {
  return (
    <ul className={styles.list}>
      {habits.map((habit) => (
        <TodayHabitItem
          key={habit.id}
          habit={habit}
          onEdit={onEdit}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};
