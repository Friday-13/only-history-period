import styles from "./period-carousel.module.scss";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { useCirclePath } from "./use-circle-path";
import { getcarouselItems } from "./period-carousel.dom";
import { CarouselMotion } from "./carousel-motion";
import { CarouselItem, ICarouselItem } from "./carousel-item";

interface IPeriodCarousel {
  items: ICarouselItem[];
}

export const PeriodCarousel = ({ items }: IPeriodCarousel) => {
  const carouselWrapper = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
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
    <div className={styles.carouselWrapper} ref={carouselWrapper}>
      {items.map((item, ind) => {
        const carouselItem = (
          <CarouselItem
            key={ind}
            isActive={ind === activeIndex}
            className={styles.carouselItem}
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
        viewBox={"0 0 302 302"}
        ref={svgRef}
      >
        <circle
          className={styles.carouselTrajectory}
          id="holder"
          cx="151"
          cy="151"
          r="150"
        />
      </svg>
    </div>
  );
};
