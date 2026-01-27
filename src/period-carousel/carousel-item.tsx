import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HTMLAttributes, useRef } from "react";

interface ICarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  isActive: boolean;
}

export const CarouselItem = (props: ICarouselItemProps) => {
  const itemRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!itemRef.current) return;
      const item = itemRef.current;

      gsap.set(item, {
        scale: props.isActive ? 1 : 0.2,
        backgroundColor: props.isActive ? "#f4f5f9" : "#42567a",
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
        scale: 0.2,
        backgroundColor: "#42567a",
        duration: 0.2,
      });
    }
  };
  return (
    <div
      ref={itemRef}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      {...props}
    >
      {props.children}
    </div>
  );
};
