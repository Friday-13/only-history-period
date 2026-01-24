import styles from "./events.module.scss";
interface IEvent {
  year: number;
  data: string;
}

export const Events = ({ events }: { events: IEvent[] }) => {
  return (
    <div>
      <div className={styles.event}>
        <h4>{events[0].year}</h4>
        <div className={styles.data}>{events[0].data}</div>
      </div>
    </div>
  );
};
