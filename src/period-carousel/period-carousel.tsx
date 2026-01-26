import gsap from "gsap";
import styles from "./period-carousel.module.scss";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import classNames from "classnames";
import { useCirclePath } from "./use-circle-path";
import { getcarouselItems } from "./period-carousel.dom";
import {
  initCarouseItemPosition,
  setCarouselItemsMotion,
  setCarouselMotion,
  timeLine,
} from "./carousel-motion";

const wrapProgress = gsap.utils.wrap(0, 1);
const snap = gsap.utils.snap(1 / 6);

const moveCarousel = (step: number) => {
  const progress = timeLine.progress();
  timeLine.progress(wrapProgress(snap(timeLine.progress() + step)));
  timeLine.progress(progress);

  gsap.to(timeLine, {
    progress: snap(timeLine.progress() + step),
    modifiers: {
      progress: wrapProgress,
    },
  });
};

interface IPeriodCarousel {
  items: string[];
}

export const PeriodCarousel = ({ items }: IPeriodCarousel) => {
  const carouselWrapper = useRef<HTMLDivElement | null>(null);
  const carouselItemRefs = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const circlePathRef = useCirclePath({
    svgRef,
    options: { pathId: "circlePath", sourceId: "holder" },
  });

  useGSAP(() => {
    if (!carouselWrapper.current) return;
    const carouselItems = getcarouselItems(
      carouselWrapper.current,
      "[data-carousel-item]",
    );

    if (!carouselItems) return;
    if (!circlePathRef.current) return;
    initCarouseItemPosition(carouselItems, circlePathRef.current);

    setCarouselMotion(carouselWrapper.current);
    setCarouselItemsMotion(carouselItems);

    // const wrapTracker = gsap.utils.wrap(0, items.length);
    // const tracker = { item: activeIndex };
    //
    // timeLine.to(
    //   tracker,
    //   {
    //     item: items.length,
    //     duration: 5,
    //     ease: "none",
    //     modifiers: {
    //       item(value) {
    //         return wrapTracker(items.length - Math.round(value));
    //       },
    //     },
    //   },
    //   0,
    // );
  });

  return (
    <div className={styles.carouselWrapper} ref={carouselWrapper}>
      {items.map((item, ind) => {
        const carouselItem = (
          <div
            key={ind}
            className={classNames(styles.carouselItem, {
              [styles.carouselItemActive]: ind === activeIndex,
            })}
            ref={carouselItemRefs}
            data-carousel-item
            onClick={() => {
              const diff = activeIndex - ind;
              const itemStep = 1 / 6;
              if (Math.abs(diff) < 6 / 2) {
                moveCarousel(diff * itemStep);
              } else {
                const amt = 6 - Math.abs(diff);

                if (activeIndex > ind) {
                  moveCarousel(amt * -itemStep);
                } else {
                  moveCarousel(amt * itemStep);
                }
              }
              setActiveIndex(ind);
            }}
          >
            {item}
          </div>
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
