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

  const startValueRef = useRef({ value: start });
  const endValueRef = useRef({ value: end });

  useGSAP(() => {
    if (!startYearRef.current) return;
    if (!endYearRef.current) return;

    gsap.to(startValueRef.current, {
      value: start,
      duration: 1,
      ease: "power1.out",
      onUpdate() {
        startYearRef.current!.textContent = Math.round(
          startValueRef.current.value,
        ).toString();
      },
    });

    gsap.to(endValueRef.current, {
      value: end,
      duration: 1,
      ease: "power1.out",
      onUpdate() {
        endYearRef.current!.textContent = Math.round(
          endValueRef.current.value,
        ).toString();
      },
    });
  }, [start, end]);

  return (
    <div className={styles.year}>
      <h3 ref={startYearRef}>{start}</h3>
      <h3 ref={endYearRef}>{end}</h3>
    </div>
  );
};
