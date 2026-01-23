import { Divider } from "./divider";
import { YearPeriod } from "./year-period";

export const HistoricalDates = () => {
  return (
    <section>
      <h2>
        Исторические
        <br />
        даты
      </h2>
      <YearPeriod start={2015} end={2022} />
      <Divider />
    </section>
  );
};
