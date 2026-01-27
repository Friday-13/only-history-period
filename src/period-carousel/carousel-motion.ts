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
    gsap.set(this.items, {
      motionPath: {
        path: this.path,
        align: this.path,
        alignOrigin: [0.5, 0.5],
        end: (i) => (i - 1) / this.length,
      },
      scale: 0.2,
      backgroundColor: "#42567a",
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
}
