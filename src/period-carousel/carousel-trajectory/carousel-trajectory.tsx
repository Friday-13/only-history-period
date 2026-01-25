import styles from "./carousel-trajectory.module.scss";
export const CarouselTrajectory = () => {
  return (
    <svg className={styles.carouselTrajectoryWrapper} viewBox={"0 0 302 302"}>
      <circle
        className={styles.carouselTrajectory}
        id="holder"
        cx="151"
        cy="151"
        r="150"
      />
    </svg>
  );
};
