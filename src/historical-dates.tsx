import { Divider } from "./divider";
import { Events } from "./events";
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
    </section>
  );
};
