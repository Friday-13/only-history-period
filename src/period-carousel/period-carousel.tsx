import classNames from "classnames";
import { CarouselTrajectory } from "./carousel-trajectory/carousel-trajectory";
import styles from "./period-carousel.module.scss";
export const PeriodCarousel = () => {
  return (
    <div className={styles.carouselWrapper}>
      <div
        className={classNames(styles.carouselItem, styles.carouselItemActive)}
      >
        1
      </div>
      <div className={styles.carouselItem}>2</div>
      <div className={styles.carouselItem}>3</div>
      <div className={styles.carouselItem}>4</div>
      <div className={styles.carouselItem}>5</div>
      <div className={styles.carouselItem}>6</div>
      <CarouselTrajectory />
    </div>
  );
};
