import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HTMLAttributes, useRef } from "react";
import styles from "./carousel-item.module.scss";

export interface ICarouselItem {
  value: string;
  label?: string;
}

interface ICarouselItemProps
  extends HTMLAttributes<HTMLDivElement>, ICarouselItem {
  isActive: boolean;
}

export const CarouselItem = ({
  isActive,
  value,
  label,
  ...props
}: ICarouselItemProps) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!itemRef.current) return;
      if (!labelRef.current) return;
      const item = itemRef.current;
      const label = labelRef.current;

      gsap.set(item, {
        scale: isActive ? 1 : 0.15,
        backgroundColor: isActive ? "#f4f5f9" : "#42567a",
      });

      gsap.set(label, {
        opacity: isActive ? 1 : 0,
        scaleX: isActive ? 1 : 0,
        ease: "power2",
      });
    },
    { dependencies: [isActive] },
  );

  const mouseEnter = () => {
    if (!itemRef.current) return;
    const item = itemRef.current;
    if (!isActive) {
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

    if (!isActive) {
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
        className={styles.carouselItem}
        ref={itemRef}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        {...props}
      >
        {value}
        <div ref={labelRef} className={styles.carouselLabel}>
          {label}
        </div>
        {props.children}
      </div>
    </>
  );
};
