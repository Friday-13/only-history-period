import styles from "./divider.module.scss";
export const Divider = () => {
  return (
    <div className={styles.dividerContainer}>
      <div className={styles.divider}></div>
    </div>
  );
};
