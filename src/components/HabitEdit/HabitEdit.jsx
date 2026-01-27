import { useState } from 'react';
import styles from './HabitEdit.module.css';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export const HabitEdit = ({ habits, onAddHabit, onClose }) => {
  const [newHabit, setNewHabit] = useState('');

  const handleChange = (e) => {
    setNewHabit(e.target.value);
  };

  const handleAdd = () => {
    if (!newHabit.trim()) {
      return;
    }

    onAddHabit(newHabit);
    setNewHabit('');
  };

  const handleKeyDown = (e) => {
    if (e.key !== 'Enter') {
      return;
    }

    e.preventDefault();

    
  const trimmed = newHabit.trim();
    if (!trimmed) {
      return;
    }

    handleAdd();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>습관 목록</h2>
      {/* istSection */}
      <section className={styles.listSection}>
        <ul className={styles.list}>
          {habits.map((habit) => (
            <li key={habit.id} className={styles.item}>
              {habit.title}
            </li>
          ))}
        </ul>

        {/* addSection */}
        <div className={styles.addRow}>
          <Input
            value={newHabit}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="+"
            aria-label="습관 추가"
            variant="centerPlaceholder"
            size="lg"
          />
        </div>
      </section>

      {/* 푸터 */}
      <div className={styles.footer}>
        <Button variant="secondary" onClick={onClose}>
          취소
        </Button>
        <Button onClick={onClose}>수정 완료</Button>
      </div>
    </div>
  );
};
