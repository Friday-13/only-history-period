import { HTMLAttributes } from "react";
import styles from "./carousel-control.module.scss";
import classNames from "classnames";

export interface ICarouselControl extends HTMLAttributes<HTMLDivElement> {
  dir: "prev" | "next";
  isDisable: boolean;
}

export const CarouselControl = ({
  dir,
  isDisable,
  ...props
}: ICarouselControl) => {
  return (
    <div
      className={classNames(
        styles.carouselControl,
        { [`${styles.carouselControlDisabled}`]: isDisable },
        dir === "prev"
          ? styles.carouselControlPrev
          : styles.carouselControlNext,
      )}
      {...props}
    ></div>
  );
};
