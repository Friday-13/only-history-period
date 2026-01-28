import styles from "./historical-dates.module.scss";
import historicalPeriods from "@shared/data/historical-period.json";
import { useState } from "react";
import { Events } from "@widgets/events";
import { PeriodCarousel } from "@widgets/period-carousel";
import { YearPeriod } from "@widgets/year-period";
import { Divider } from "@shared/ui/divider";

export const HistoricalDates = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getPeriod = () => {
    const events = historicalPeriods.sections[activeIndex].events;
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
          items={historicalPeriods.sections.map((period, index) => ({
            value: `${index + 1}`,
            label: period.title,
          }))}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
      <Divider />
      <div className={styles.eventsWrapper}>
        <Events events={historicalPeriods.sections[activeIndex].events} />
      </div>
    </section>
  );
};
