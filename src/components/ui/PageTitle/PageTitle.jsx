import styles from './PageTitle.module.css';

export function PageTitle({ children }) {
  return <h3 className={styles.title}>{children}</h3>;
}
