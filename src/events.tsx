import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./events.module.scss";

interface IEvent {
  year: number;
  data: string;
}

export const Events = ({ events }: { events: IEvent[] }) => {
  return (
    <Swiper spaceBetween={25} slidesPerView={1.6} watchSlidesProgress={true}>
      <SwiperSlide>
        <div className={styles.event}>
          <h4>{events[0].year}</h4>
          <div className={styles.data}>{events[0].data}</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.event}>
          <h4>{events[1].year}</h4>
          <div className={styles.data}>{events[1].data}</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.event}>
          <h4>{events[0].year}</h4>
          <div className={styles.data}>{events[0].data}</div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
