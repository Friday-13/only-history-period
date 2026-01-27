import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HTMLAttributes, useRef } from "react";
import styles from "./period-carousel.module.scss";

export interface ICarouselItem {
  value: string;
  label?: string;
}

interface ICarouselItemProps
  extends HTMLAttributes<HTMLDivElement>, ICarouselItem {
  isActive: boolean;
}

export const CarouselItem = (props: ICarouselItemProps) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!itemRef.current) return;
      if (!labelRef.current) return;
      const item = itemRef.current;
      const label = labelRef.current;

      gsap.set(item, {
        scale: props.isActive ? 1 : 0.15,
        backgroundColor: props.isActive ? "#f4f5f9" : "#42567a",
      });

      gsap.set(label, {
        opacity: props.isActive ? 1 : 0,
        scaleX: props.isActive ? 1 : 0,
        ease: "power2",
      });
    },
    { dependencies: [props.isActive] },
  );

  const mouseEnter = () => {
    if (!itemRef.current) return;
    const item = itemRef.current;
    if (!props.isActive) {
      gsap.to(item, {
        scale: 1,
        backgroundColor: "#f4f5f9",
        duration: 0.2,
      });
    }
  };

  const mouseLeave = () => {
    if (!itemRef.current) return;
    const item = itemRef.current;

    if (!props.isActive) {
      gsap.to(item, {
        scale: 0.15,
        backgroundColor: "#42567a",
        duration: 0.2,
      });
    }
  };
  return (
    <>
      <div
        ref={itemRef}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        {...props}
      >
        {props.value}
        <div ref={labelRef} className={styles.carouselLabel}>
          {props.label}
        </div>
        {props.children}
      </div>
    </>
  );
};
