import styles from './Empty.module.css';

export const Empty = ({ message }) => {
  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
    </div>
  );
};