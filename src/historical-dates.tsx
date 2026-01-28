import { Divider } from "./divider";
import { Events } from "./events";
import { PeriodCarousel } from "./period-carousel/period-carousel";
import { YearPeriod } from "./year-period";
import styles from "./historical-dates.module.scss";
import historyPeriods from "./assets/history-period.json";
import { useState } from "react";

export const HistoricalDates = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getPeriod = () => {
    const events = historyPeriods.sections[activeIndex].events;
    const years = events.map((event) => event.year);
    return { start: Math.min(...years), end: Math.max(...years) };
  };

  return (
    <section className={styles.period}>
      <div className={styles.periodWrapper}>
        <h2>
          Исторические
          <br />
          даты
        </h2>
        <YearPeriod {...getPeriod()} />
        <PeriodCarousel
          items={historyPeriods.sections.map((period, index) => ({
            value: `${index + 1}`,
            label: period.title,
          }))}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
      <Divider />
      <div className={styles.eventsWrapper}>
        <Events events={historyPeriods.sections[activeIndex].events} />
      </div>
    </section>
  );
};
