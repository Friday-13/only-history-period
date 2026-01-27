import { HTMLAttributes } from "react";
import styles from "./carousel-control.module.scss";
import classNames from "classnames";

export interface ICarouselControl extends HTMLAttributes<HTMLDivElement> {
  dir: "prev" | "next";
  isDisable: boolean;
}

export const CarouselControl = (props: ICarouselControl) => {
  return (
    <div
      className={classNames(
        styles.carouselControl,
        { [`${styles.carouselControlDisabled}`]: props.isDisable },
        props.dir === "prev"
          ? styles.carouselControlPrev
          : styles.carouselControlNext,
      )}
      {...props}
    ></div>
  );
};
