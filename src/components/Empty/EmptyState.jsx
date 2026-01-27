// Empty state UI shown when there is no habit data
import styles from './Empty.module.css';

export const EmptyState = ({ message }) => {
return (
<div className={styles.container}>
<p className={styles.message}>{message}</p>
</div>
);
};
