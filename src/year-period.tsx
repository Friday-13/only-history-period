import { useRef } from "react";
import styles from "./year-period.module.scss";
export interface IYearPeriod {
  start: number;
  end: number;
}

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const YearPeriod = ({ start, end }: IYearPeriod) => {
  const startYearRef = useRef<HTMLHeadingElement | null>(null);
  const endYearRef = useRef<HTMLHeadingElement | null>(null);
  useGSAP(() => {
    if (!startYearRef.current) return;
    if (!endYearRef.current) return;
    gsap.from(startYearRef.current, {
      textContent: 0,
      duration: 1,
      ease: "power1.in",
      snap: { textContent: 1 },
      stagger: 1,
    });
  });

  return (
    <div className={styles.year}>
      <h3 ref={startYearRef}>{start}</h3>
      <h3 ref={endYearRef}>{end}</h3>
    </div>
  );
};
