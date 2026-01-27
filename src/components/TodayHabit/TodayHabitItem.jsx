import styles from './TodayHabitItem.module.css';

export const TodayHabitItem = ({ habit, onToggleDone }) => {
  const handleItemClick = () => {
    onToggleDone(habit.id);
  };

  const itemClassName = habit.isDone
    ? `${styles.item} ${styles.itemDone}`
    : styles.item;

  return (
    <li
      className={itemClassName}
      onClick={handleItemClick}
      role="button"
      tabIndex={0}
    >
      <span className={styles.text}>{habit.title}</span>

      
    </li>
  );
};
