import gsap from "gsap";

const motionDuration = 5;

export const timeLine = gsap.timeline({ paused: true, reversed: true });

export const initCarouseItemPosition = (
  carouselItems: NodeListOf<HTMLDivElement>,
  path: SVGPathElement,
) => {
  gsap.set(carouselItems, {
    motionPath: {
      path: path,
      align: path,
      alignOrigin: [0.5, 0.5],
      end: (i) => (i - 1) / carouselItems.length,
    },
    scale: 0.2,
    backgroundColor: "#42567a",
  });
};

export const setCarouselMotion = (wrapper: HTMLDivElement) => {
  timeLine.to(wrapper, {
    rotation: 360,
    transformOrigin: "center",
    duration: motionDuration,
    ease: "none",
  });
};

export const setCarouselItemsMotion = (items: NodeListOf<HTMLDivElement>) => {
  timeLine.to(
    items,
    {
      rotation: "-=360",
      transformOrigin: "center",
      duration: motionDuration,
      ease: "none",
    },
    0,
  );
};


