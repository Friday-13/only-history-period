import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./events.module.scss";

interface IEvent {
  year: number;
  data: string;
}

export const Events = ({ events }: { events: IEvent[] }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1.6}
      watchSlidesProgress={true}
      slidesOffsetBefore={20}
      slidesOffsetAfter={20}
      navigation={{ enabled: false, addIcons: false }}
      breakpoints={{
        1200: {
          spaceBetween: 60,
          slidesPerView: 3,
          slidesOffsetBefore: 60,
          slidesOffsetAfter: 60,
          pagination: { clickable: true },
          navigation: {
            enabled: true,
          },
        },
      }}
    >
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
      <SwiperSlide>
        <div className={styles.event}>
          <h4>{events[0].year}</h4>
          <div className={styles.data}>{events[0].data}</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.event}>
          <h4>{events[0].year}</h4>
          <div className={styles.data}>{events[0].data}</div>
        </div>
      </SwiperSlide>
      <div className={styles.hehe}></div>
    </Swiper>
  );
};
