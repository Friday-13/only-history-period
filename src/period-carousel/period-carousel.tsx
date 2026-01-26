import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import styles from "./period-carousel.module.scss";
import { useGSAP } from "@gsap/react";
import { RefObject, useRef, useState } from "react";
import classNames from "classnames";

const createPath = (svgRef: RefObject<SVGSVGElement | null>) => {
  if (!svgRef.current) return;

  gsap.registerPlugin(MotionPathPlugin);
  const paths = MotionPathPlugin.convertToPath("#holder", false);
  if (!paths.length) return;
  const circlePath = paths[0] as SVGPathElement;
  circlePath.id = "circlePath";
  svgRef.current.prepend(circlePath);
  return circlePath;
};

interface IPeriodCarousel {
  items: string[];
}

export const PeriodCarousel = ({ items }: IPeriodCarousel) => {
  const carouselWrapper = useRef<HTMLDivElement | null>(null);
  const carouselItemRefs = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useGSAP(() => {
    const circlePath = createPath(svgRef);
    if (!carouselWrapper) return;

    const carouselItems =
      carouselWrapper.current?.querySelectorAll<HTMLDivElement>(
        "[data-carousel-item]",
      );

    if (!carouselItems) return;

    gsap.set(carouselItems, {
      motionPath: {
        path: circlePath,
        align: circlePath,
        alignOrigin: [0.5, 0.5],
        end: (i) => i / items.length,
      },
      scale: 0.9,
    });

    const timeLine = gsap.timeline({ paused: true, reversed: true });

    timeLine.to(carouselItems, {
      rotation: "-=360",
      transformOrigin: "center",
      duration: 30,
      ease: "none",
    });

    timeLine.to(carouselWrapper.current, {
      rotation: 360,
      transformOrigin: "center",
      duration: 30,
      ease: "none",
    });
    // gsap.to(carouselItem.current, {
    //   rotation: "-=360",
    //   transformOrigin: "center",
    //   duration: 30,
    //   ease: "none",
    // });
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
            onClick={() => setActiveIndex(ind)}
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
