import styles from './TodayHabitItem.module.css';

export const TodayHabitItem = ({ habit, onToggle }) => {
  const handleItemClick = () => {
    onToggle(habit.id);
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
