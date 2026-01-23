import styles from "./year-period.module.scss";
export interface IYearPeriod {
  start: number;
  end: number;
}
export const YearPeriod = ({ start, end }: IYearPeriod) => {
  return (
    <div className={styles.year}>
      <h3>{start}</h3>
      <h3>{end}</h3>
    </div>
  );
};
