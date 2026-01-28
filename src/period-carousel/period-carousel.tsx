import styles from "./period-carousel.module.scss";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useCirclePath } from "./use-circle-path";
import { getcarouselItems } from "./period-carousel.dom";
import { CarouselMotion } from "./carousel-motion";
import { CarouselItem, ICarouselItem } from "./carousel-item";
import { CarouselControl } from "./carousel-control";
import classNames from "classnames";

interface IPeriodCarousel {
  items: ICarouselItem[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const PeriodCarousel = ({
  items,
  activeIndex,
  setActiveIndex,
}: IPeriodCarousel) => {
  const carouselWrapper = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const circlePathRef = useCirclePath({
    svgRef,
    options: { pathId: "circlePath", sourceId: "holder" },
  });

  const carouselMotion = useRef<CarouselMotion | null>(null);

  useGSAP(() => {
    if (!carouselWrapper.current) return;
    const carouselItems = getcarouselItems(
      carouselWrapper.current,
      "[data-carousel-item]",
    );

    if (!carouselItems) return;
    if (!circlePathRef.current) return;

    carouselMotion.current = new CarouselMotion(
      carouselWrapper.current,
      carouselItems,
      circlePathRef.current,
    );
  });

  return (
    <>
      <div className={styles.carouselWrapper} ref={carouselWrapper}>
        {items.map((item, ind) => {
          const carouselItem = (
            <CarouselItem
              key={ind}
              isActive={ind === activeIndex}
              data-carousel-item
              onClick={() => {
                carouselMotion.current?.moveToIndex(ind, activeIndex);
                setActiveIndex(ind);
              }}
              value={item.value}
              label={item.label}
            />
          );
          return carouselItem;
        })}
        <svg
          className={styles.carouselTrajectoryWrapper}
          viewBox={"0 0 531 531"}
          ref={svgRef}
        >
          <circle
            className={styles.carouselTrajectory}
            id="holder"
            cx="264"
            cy="264"
            r="265"
          />
        </svg>
      </div>
      <div className={styles.carouselControlsWrapper}>
        <div className={styles.carouselProgress}>
          {`${activeIndex + 1}`.padStart(2, "0")} /{" "}
          {`${items.length}`.padStart(2, "0")}
        </div>
        <div className={styles.carouselControls}>
          <CarouselControl
            dir="prev"
            isDisable={activeIndex === 0}
            onClick={() => {
              if (!carouselMotion.current) return;
              if (carouselMotion.current.isAnimating) return;
              if (activeIndex === 0) return;
              const newActive = carouselMotion.current.moveToPrev(activeIndex);
              setActiveIndex(newActive);
            }}
          />
          <CarouselControl
            dir="next"
            isDisable={activeIndex === items.length - 1}
            onClick={() => {
              if (!carouselMotion.current) return;
              if (carouselMotion.current.isAnimating) return;
              if (activeIndex === items.length - 1) return;
              const newActive = carouselMotion.current.moveToNext(activeIndex);
              setActiveIndex(newActive);
            }}
          />
        </div>
        <div className={styles.pagination}>
          {items.map((item, index) => (
            <div
              key={`${item.value}-pagination`}
              className={classNames(styles.paginationItem, {
                [styles.paginationItemCurrent]: index === activeIndex,
              })}
              onClick={() => setActiveIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};
