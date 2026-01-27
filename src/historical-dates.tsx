import { Divider } from "./divider";
import { Events } from "./events";
import { PeriodCarousel } from "./period-carousel/period-carousel";
import { YearPeriod } from "./year-period";

export const HistoricalDates = () => {
  return (
    <section style={{ position: "relative" }}>
      <h2>
        Исторические
        <br />
        даты
      </h2>
      <YearPeriod start={2015} end={2022} />
      <Divider />
      <Events
        events={[
          {
            year: 2015,
            data: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
          },
          {
            year: 2016,
            data: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
          },
        ]}
      />
      <PeriodCarousel
        items={[
          { value: "1", label: "Технологии" },
          { value: "2", label: "Кино" },
          { value: "3", label: "Литература" },
          { value: "4", label: "" },
          { value: "5", label: "Спорт" },
          { value: "6", label: "Наука" },
        ]}
      />
    </section>
  );
};
