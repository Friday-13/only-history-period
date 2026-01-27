import gsap from "gsap";

export class CarouselMotion {
  private motionDuration = 5;
  timeLine = gsap.timeline({ paused: true, reversed: true });
  private wrapper: HTMLDivElement;
  private items: NodeListOf<HTMLDivElement>;
  private path: SVGPathElement;
  private wrapProgress = gsap.utils.wrap(0, 1);
  private snap: (value: number) => number;

  constructor(
    wrapper: HTMLDivElement,
    items: NodeListOf<HTMLDivElement>,
    path: SVGPathElement,
  ) {
    this.wrapper = wrapper;
    this.items = items;
    this.path = path;
    this.snap = gsap.utils.snap(1 / this.length);
    this.initCarouseItemPosition();
    this.setCarouselMotion();
    this.setCarouselItemsMotion();
  }

  private initCarouseItemPosition() {
    const offset = -1 / 6;
    gsap.set(this.items, {
      motionPath: {
        path: this.path,
        align: this.path,
        alignOrigin: [0.5, 0.5],
        start: offset,
        end: (i) => offset + i / this.length,
      },
      // scale: 0.2,
      // backgroundColor: "#42567a",
    });
  }

  private setCarouselMotion() {
    this.timeLine.to(this.wrapper, {
      rotation: 360,
      transformOrigin: "center",
      duration: this.motionDuration,
      ease: "none",
    });
  }

  private setCarouselItemsMotion() {
    this.timeLine.to(
      this.items,
      {
        rotation: "-=360",
        transformOrigin: "center",
        duration: this.motionDuration,
        ease: "none",
      },
      0,
    );
  }

  private get length() {
    return this.items.length;
  }

  moveCarousel(step: number) {
    const progress = this.timeLine.progress();
    this.timeLine.progress(
      this.wrapProgress(this.snap(this.timeLine.progress() + step)),
    );
    this.timeLine.progress(progress);

    gsap.to(this.timeLine, {
      progress: this.snap(this.timeLine.progress() + step),
      modifiers: {
        progress: this.wrapProgress,
      },
    });
  }

  getShortestArc(diff: number) {
    const itemStep = 1 / this.length;
    if (Math.abs(diff) < this.length / 2) {
      return diff * itemStep;
    }
    const amt = this.length - Math.abs(diff);

    if (diff > 0) {
      return amt * -itemStep;
    } else {
      return amt * itemStep;
    }
  }

  moveToIndex(index: number, currentIndex: number) {
    const diff = currentIndex - index;
    const step = this.getShortestArc(diff);
    this.moveCarousel(step);
  }
}
